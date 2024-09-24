import {request} from "../../utils/request";
import {action, makeAutoObservable, observable} from "mobx";

const SIZE = 10;
export default class HomeStore {

    page: number = 1

    constructor() {
        makeAutoObservable(this);
    }

    @observable homeList: ArticleSimple[] = []

    @observable refreshing: boolean = false;

    @action
    resetPage = ()=>{
        this.page = 1
    }

    requestHomeList = async () => {
        if (this.refreshing) {
            return
        }
        try {
            this.refreshing = true
            const params = {
                page: this.page,
                size: SIZE
            };
            const {data} = await request('homeList', params)
            console.log(`data = ${JSON.stringify(data)}`)
            if (data?.length) {
                if (this.page === 1) {
                    this.homeList = data
                } else {
                    this.homeList = [...this.homeList, ...data]
                }
                this.page = this.page + 1
            } else {
                if (this.page === 1) {
                    this.homeList = []
                } else {
                    //已经加载玩了，没有更多数据了
                }
            }
        } catch (error) {
            console.log(error)
        }finally {
            this.refreshing = false
        }
    }
}

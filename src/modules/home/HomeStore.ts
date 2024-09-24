import {request} from "../../utils/request";
import {makeAutoObservable, observable} from "mobx";

const SIZE = 10;
export default class HomeStore {

    page: number = 1
    constructor() {
        makeAutoObservable(this);
    }

   @observable homeList: ArticleSimple[] = []

    requestHomeList = async () => {
        try {
            const params = {
                page: this.page,
                size: SIZE
            }
            const {data} = await request('homeList', params)
            console.log(`data = ${JSON.stringify(data)}`)
            this.homeList = data
        } catch (error) {
            console.log(error)
        }
    }
}

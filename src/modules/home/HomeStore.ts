import {request} from "../../utils/request";

const SIZE = 10;
export default class HomeStore {

    page: number = 1

    requestHomeList = async () => {
        try {
            const params = {
                page: this.page,
                size: SIZE
            }
            const {data} = await request('homeList', params)
            console.log(`data = ${JSON.stringify(data)}`)
        } catch (error) {
            console.log(error)
        }
    }
}

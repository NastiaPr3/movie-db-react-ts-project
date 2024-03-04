import {apiService} from "./apiService";
import {urls} from "../constants";
import {IRes} from "../types";
import {IPeople} from "../interfaces";

const peopleService = {
    getCast: (id: number): IRes<IPeople> =>  apiService.get(urls.people.base(id))
}

export {
    peopleService
}
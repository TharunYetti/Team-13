import HodModel from "../models/HodModel";
import { hod } from "../types/hod";
import CrudRepository from "./crudRepo";

class HodRepository extends CrudRepository<hod>{
    constructor(){
        super(HodModel);
    }
}

export default new HodRepository();
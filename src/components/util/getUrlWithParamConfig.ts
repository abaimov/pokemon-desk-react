import config from "../config"

function getUrlWithParamConfig (endpointConfig:any,query:object){

    let url = {
        ...config.client.client.server,
        ...config.client.endpoint[endpointConfig].uri,
        query:query
    }
    return url;
}


export default getUrlWithParamConfig
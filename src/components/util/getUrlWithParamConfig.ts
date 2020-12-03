import config from "../config"

function getUrlWithParamConfig (endpointConfig:any,query:any){

    let url = {
        ...config.client.client.server,
        ...config.client.endpoint[endpointConfig as keyof typeof config.client.endpoint].uri,
        query:{
            ...query
        }
    }
    const pathname = Object.keys(query).reduce((acc,val)=>{
        if(acc.indexOf(`{${val}}`) !== -1 ){
            const result = acc.replace(`{${val}}`, query[val]);
            delete query[val];
            return result;
        }
        return acc;

    },url.pathname)
    url.pathname=pathname;
    url.query ={
        ...query,
    }
    return url
}


export default getUrlWithParamConfig
import  'dotenv/config'
import * as joi from 'joi'

interface EnvVars {
    PORT: number;
    PRODUCT_MICROSERVICE_HOST: string;
    PRODUCT_MICROSERVICE_PORT: number;
}

const envsSchema = joi.object({
    PORT: joi.number().required(),
    PRODUCT_MICROSERVICE_HOST: joi.string().required(),
    PRODUCT_MICROSERVICE_PORT: joi.number().required(),
})
.unknown(true);

const{error, value} = envsSchema.validate(process.env);

if(error) {
    throw new Error(`Error de Configuración: ${error.message}`);
}

const envVars: EnvVars = value;

export const envs = {
    port: envVars.PORT,
    productsMicroserviceHost: envVars.PRODUCT_MICROSERVICE_HOST,
    productsMicroservicePort: envVars.PRODUCT_MICROSERVICE_PORT,
}
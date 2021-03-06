const request=require('request')
const geocode=require('./utils/geocode')
const forecast=require('./utils/forecast')

//console.log(process.argv);

const address=process.argv[2];
//console.log(address);
if(!address)
{
    console.log('please provide an address')
}
else{
    geocode(address, (error, data)=>{
        if(error){
            return console.log(error)
        }

        forecast(data.latitude, data.longitude, (error, forecastData)=>{
            if(error){
                return console.log(error)
            }
            console.log(data.location)
            console.log(forecastData)
        })
    })
}
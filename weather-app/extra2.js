const request=require('request')

const geocodeURL='https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoiYXZpbmFzaDIyMjIiLCJhIjoiY2sxZ2FuN2xuMDAybjNscjJodnRqenl2MSJ9.1StrOA-XgiEyjtfqQBJW_A'

request({url:geocodeURL, json:true}, (error, response)=>{
    const latitude=response.body.features[0].center[1]
    const longitude=response.body.features[0].center[0]
    console.log(latitude, longitude);
});

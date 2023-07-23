"use client";

type AvweatherProps = {
    raw_text: string
    latitude: string
    longitude: string
    temp_c: string
    dewpoint_c?: string
    wind_dir_degrees: string
    wind_speed_kt: string
    visibility_statute_mi: string
    altim_in_hg: string
    sea_level_pressure_mb: string
    flight_category: string
    sky_condition: [ {
        cloud_base_ft_agl?: string, 
        sky_cover: string
    } ]
}

export default function Avweather({ 
    raw_text,
    latitude,
    longitude,
    temp_c,
    dewpoint_c,
    wind_dir_degrees,
    wind_speed_kt,
    visibility_statute_mi,
    altim_in_hg,
    sea_level_pressure_mb,
    flight_category,
    sky_condition
} : 
    AvweatherProps
) {
    return (<div>
        <p>latitude: {latitude}</p>
        <p>longitude: {longitude}</p>
        <p>temp_c: {temp_c}</p>
        <p>dewpoint_c: {dewpoint_c}</p>
        <p>wind_dir_degrees: {wind_dir_degrees}</p>
        <p>wind_speed_kt: {wind_speed_kt}</p>
        <p>visibility_statute_mi: {visibility_statute_mi}</p>
        <p>altim_in_hg: {altim_in_hg}</p>
        <p>sea_level_pressure_mb: {sea_level_pressure_mb}</p>
        <p>flight_category: {flight_category}</p>
        <p>sky_condition: {sky_condition && sky_condition.map(sky => (<li key={sky.cloud_base_ft_agl}>{sky.sky_cover} {sky.cloud_base_ft_agl}</li>))}</p>
        <p>{raw_text}</p>
    </div>);
}
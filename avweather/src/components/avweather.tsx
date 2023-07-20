"use client";

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
} : { 
    raw_text: string,
    latitude: string,
    longitude: string,
    temp_c: string,
    dewpoint_c: string,
    wind_dir_degrees: string,
    wind_speed_kt: string,
    visibility_statute_mi: string,
    altim_in_hg: string,
    sea_level_pressure_mb: string,
    flight_category: string,
    sky_condition: [ {
        cloud_base_ft_agl: string, 
        sky_cover: string
    } ]
}) {
    return (<div>
        <p>{raw_text}</p>
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
        <p>sky_condition: {sky_condition[0].sky_cover} {sky_condition[0].cloud_base_ft_agl}</p>
    </div>);
}
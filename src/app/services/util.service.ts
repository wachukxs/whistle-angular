import { Injectable } from '@angular/core';
import { SwPush } from '@angular/service-worker';
import { Observable } from 'rxjs';

export interface CountryInfo {
  name: string,
  iso_code_2: string,
  iso_code_3: string,
  name_abbr?: string,
  full_name?:string,
  aka_name?:string
}

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  countries: CountryInfo[] = [
    {name: "Nigeria", iso_code_2: "NG", iso_code_3: "NGA" },
    {name: "Ethiopia", iso_code_2: "ET", iso_code_3: "ETH"},
    {name: "Egypt", iso_code_2: "EG", iso_code_3: "EGY"},
    {name: "DR Congo", iso_code_2: "CD", iso_code_3: "COD", full_name: "Democratic Republic of the Congo"},
    {name: "Tanzania", iso_code_2: "TZ", iso_code_3: "TZA"},
    {name: "South Africa", iso_code_2: "ZA", iso_code_3: "ZAF"},
    {name: "Kenya", iso_code_2: "KE", iso_code_3: "KEN"},
    {name: "Uganda", iso_code_2: "UG", iso_code_3: "UGA"},
    {name: "Algeria", iso_code_2: "DZ", iso_code_3: "DZA"},
    {name: "Sudan", iso_code_2: "SD", iso_code_3: "SDN"},
    {name: "Morocco", iso_code_2: "MA", iso_code_3: "MAR"},
    {name: "Angola", iso_code_2: "AO", iso_code_3: "AGO"},
    {name: "Mozambique", iso_code_2: "MZ", iso_code_3: "MOZ"},
    {name: "Ghana", iso_code_2: "GH", iso_code_3: "GHA"},
    {name: "Madagascar", iso_code_2: "MG", iso_code_3: "MDG"},
    {name: "Cameroon", iso_code_2: "CM", iso_code_3: "CMR"},
    {name: "Cote d'Ivoire", iso_code_2: "CI", iso_code_3: "CIV", full_name: "The Republic of Côte d'Ivoire", aka_name: "Ivory Coast"},
    {name: "Niger", iso_code_2: "NE", iso_code_3: "NER"},
    {name: "Burkina Faso", iso_code_2: "BF", iso_code_3: "BFA"},
    {name: "Mali", iso_code_2: "ML", iso_code_3: "MLI"},
    {name: "Malawi", iso_code_2: "MW", iso_code_3: "MWI"},
    {name: "Zambia", iso_code_2: "ZM", iso_code_3: "ZMB"},
    {name: "Senegal", iso_code_2: "SN", iso_code_3: "SEN"},
    {name: "Chad", iso_code_2: "TD", iso_code_3: "TCD"},
    {name: "Somalia", iso_code_2: "SO", iso_code_3: "SOM"},
    {name: "Zimbabwe", iso_code_2: "ZW", iso_code_3: "ZWE"},
    {name: "Guinea", iso_code_2: "GN", iso_code_3: "GIN"},
    {name: "Rwanda", iso_code_2: "RW", iso_code_3: "RWA"},
    {name: "Benin", iso_code_2: "BJ", iso_code_3: "BEN"},
    {name: "Burundi", iso_code_2: "BI", iso_code_3: "BDI"},
    {name: "Tunisia", iso_code_2: "TN", iso_code_3: "TUN"},
    {name: "South Sudan", iso_code_2: "SS", iso_code_3: "SSD"},
    {name: "Togo", iso_code_2: "TG", iso_code_3: "TGO"},
    {name: "Sierra Leone", iso_code_2: "SL", iso_code_3: "SLE"},
    {name: "Libya", iso_code_2: "LY", iso_code_3: "LBY"},
    {name: "Congo", iso_code_2: "CG", iso_code_3: "COG", full_name: "Republic of the Congo"},
    {name: "Liberia", iso_code_2: "LR", iso_code_3: "LBR"},
    {name: "Central African Republic", iso_code_2: "CF", iso_code_3: "CAF"},
    {name: "Mauritania", iso_code_2: "MR", iso_code_3: "MRT"},
    {name: "Eritrea", iso_code_2: "ER", iso_code_3: "ERI"},
    {name: "Namibia", iso_code_2: "NA", iso_code_3: "NAM"},
    {name: "Gambia", iso_code_2: "GM", iso_code_3: "GMB"},
    {name: "Botswana", iso_code_2: "BW", iso_code_3: "BWA"},
    {name: "Gabon", iso_code_2: "GA", iso_code_3: "GAB"},
    {name: "Lesotho", iso_code_2: "LS", iso_code_3: "LSO"},
    {name: "Guinea-Bissau", iso_code_2: "GW", iso_code_3: "GNB"},
    {name: "Equatorial Guinea", iso_code_2: "GQ", iso_code_3: "GNQ"},
    {name: "Mauritius", iso_code_2: "MU", iso_code_3: "MUS"},
    {name: "Eswatini", iso_code_2: "SZ", iso_code_3: "SWZ"},
    {name: "Djibouti", iso_code_2: "DJ", iso_code_3: "DJI"},
    {name: "Comoros", iso_code_2: "KM", iso_code_3: "COM"},
    {name: "Cape Verde", iso_code_2: "CV", iso_code_3: "CPV"},
    {name: "Sao Tome & Principe", iso_code_2: "ST", iso_code_3: "STP"},
    {name: "Seychelles", iso_code_2: "SC", iso_code_3: "SYC"}
  ]

  constructor() { }
}

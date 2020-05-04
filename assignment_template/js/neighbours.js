const neighbours = {
  AFG: [ 'IRN', 'PAK', 'TKM', 'UZB', 'TJK', 'CHN' ],
  ALA: [],
  ALB: [ 'MNE', 'GRC', 'MKD', 'KOS' ],
  DZA: [
    'TUN', 'LBY',
    'NER', 'ESH',
    'MRT', 'MLI',
    'MAR'
  ],
  ASM: [],
  AND: [ 'FRA', 'ESP' ],
  AGO: [ 'COG', 'COD', 'ZMB', 'NAM' ],
  AIA: [],
  ATA: [],
  ATG: [],
  ARG: [ 'BOL', 'BRA', 'CHL', 'PRY', 'URY' ],
  ARM: [ 'AZE', 'GEO', 'IRN', 'TUR' ],
  ABW: [],
  AUS: [],
  AUT: [
    'CZE', 'DEU',
    'HUN', 'ITA',
    'LIE', 'SVK',
    'SVN', 'CHE'
  ],
  AZE: [ 'ARM', 'GEO', 'IRN', 'RUS', 'TUR' ],
  BHS: [],
  BHR: [],
  BGD: [ 'MMR', 'IND' ],
  BRB: [],
  BLR: [ 'LVA', 'LTU', 'POL', 'RUS', 'UKR' ],
  BEL: [ 'FRA', 'DEU', 'LUX', 'NLD' ],
  BLZ: [ 'GTM', 'MEX' ],
  BEN: [ 'BFA', 'NER', 'NGA', 'TGO' ],
  BMU: [],
  BTN: [ 'CHN', 'IND' ],
  BOL: [ 'ARG', 'BRA', 'CHL', 'PRY', 'PER' ],
  BES: [],
  BIH: [ 'HRV', 'MNE', 'SRB' ],
  BWA: [ 'NAM', 'ZAF', 'ZMB', 'ZWE' ],
  BVT: [],
  BRA: [
    'ARG', 'BOL', 'COL',
    'GUF', 'GUY', 'PRY',
    'PER', 'SUR', 'URY',
    'VEN'
  ],
  IOT: [],
  UMI: [],
  VGB: [],
  VIR: [],
  BRN: [ 'MYS' ],
  BGR: [ 'GRC', 'MKD', 'ROU', 'SRB', 'TUR' ],
  BFA: [ 'BEN', 'CIV', 'GHA', 'MLI', 'NER', 'TGO' ],
  BDI: [ 'COD', 'RWA', 'TZA' ],
  KHM: [ 'LAO', 'THA', 'VNM' ],
  CMR: [ 'CAF', 'TCD', 'COG', 'GNQ', 'GAB', 'NGA' ],
  CAN: [ 'USA' ],
  CPV: [],
  CYM: [],
  CAF: [ 'CMR', 'TCD', 'COD', 'COG', 'SSD', 'SDN' ],
  TCD: [ 'CMR', 'CAF', 'LBY', 'NER', 'NGA', 'SSD' ],
  CHL: [ 'ARG', 'BOL', 'PER' ],
  CHN: [
    'AFG', 'BTN', 'MMR',
    'HKG', 'IND', 'KAZ',
    'PRK', 'KGZ', 'LAO',
    'MAC', 'MNG', 'PAK',
    'RUS', 'TJK', 'VNM'
  ],
  CXR: [],
  CCK: [],
  COL: [ 'BRA', 'ECU', 'PAN', 'PER', 'VEN' ],
  COM: [],
  COG: [ 'AGO', 'CMR', 'CAF', 'COD', 'GAB' ],
  COD: [
    'AGO', 'BDI',
    'CAF', 'COG',
    'RWA', 'SSD',
    'TZA', 'UGA',
    'ZMB'
  ],
  COK: [],
  CRI: [ 'NIC', 'PAN' ],
  HRV: [ 'BIH', 'HUN', 'MNE', 'SRB', 'SVN' ],
  CUB: [],
  CUW: [],
  CYP: [ 'GBR' ],
  CZE: [ 'AUT', 'DEU', 'POL', 'SVK' ],
  DNK: [ 'DEU' ],
  DJI: [ 'ERI', 'ETH', 'SOM' ],
  DMA: [],
  DOM: [ 'HTI' ],
  ECU: [ 'COL', 'PER' ],
  EGY: [ 'ISR', 'LBY', 'SDN' ],
  SLV: [ 'GTM', 'HND' ],
  GNQ: [ 'CMR', 'GAB' ],
  ERI: [ 'DJI', 'ETH', 'SDN' ],
  EST: [ 'LVA', 'RUS' ],
  ETH: [ 'DJI', 'ERI', 'KEN', 'SOM', 'SSD', 'SDN' ],
  FLK: [],
  FRO: [],
  FJI: [],
  FIN: [ 'NOR', 'SWE', 'RUS' ],
  FRA: [
    'AND', 'BEL',
    'DEU', 'ITA',
    'LUX', 'MCO',
    'ESP', 'CHE'
  ],
  GUF: [ 'BRA', 'SUR' ],
  PYF: [],
  ATF: [],
  GAB: [ 'CMR', 'COG', 'GNQ' ],
  GMB: [ 'SEN' ],
  GEO: [ 'ARM', 'AZE', 'RUS', 'TUR' ],
  DEU: [
    'AUT', 'BEL',
    'CZE', 'DNK',
    'FRA', 'LUX',
    'NLD', 'POL',
    'CHE'
  ],
  GHA: [ 'BFA', 'CIV', 'TGO' ],
  GIB: [ 'ESP' ],
  GRC: [ 'ALB', 'BGR', 'TUR', 'MKD' ],
  GRL: [],
  GRD: [],
  GLP: [],
  GUM: [],
  GTM: [ 'BLZ', 'SLV', 'HND', 'MEX' ],
  GGY: [],
  GIN: [ 'CIV', 'GNB', 'LBR', 'MLI', 'SEN', 'SLE' ],
  GNB: [ 'GIN', 'SEN' ],
  GUY: [ 'BRA', 'SUR', 'VEN' ],
  HTI: [ 'DOM' ],
  HMD: [],
  VAT: [ 'ITA' ],
  HND: [ 'GTM', 'SLV', 'NIC' ],
  HKG: [ 'CHN' ],
  HUN: [
    'AUT', 'HRV',
    'ROU', 'SRB',
    'SVK', 'SVN',
    'UKR'
  ],
  ISL: [],
  IND: [
    'AFG', 'BGD',
    'BTN', 'MMR',
    'CHN', 'NPL',
    'PAK', 'LKA'
  ],
  IDN: [ 'TLS', 'MYS', 'PNG' ],
  CIV: [ 'BFA', 'GHA', 'GIN', 'LBR', 'MLI' ],
  IRN: [
    'AFG', 'ARM',
    'AZE', 'IRQ',
    'PAK', 'TUR',
    'TKM'
  ],
  IRQ: [ 'IRN', 'JOR', 'KWT', 'SAU', 'SYR', 'TUR' ],
  IRL: [ 'GBR' ],
  IMN: [],
  ISR: [ 'EGY', 'JOR', 'LBN', 'SYR' ],
  ITA: [ 'AUT', 'FRA', 'SMR', 'SVN', 'CHE', 'VAT' ],
  JAM: [],
  JPN: [],
  JEY: [],
  JOR: [ 'IRQ', 'ISR', 'SAU', 'SYR' ],
  KAZ: [ 'CHN', 'KGZ', 'RUS', 'TKM', 'UZB' ],
  KEN: [ 'ETH', 'SOM', 'SSD', 'TZA', 'UGA' ],
  KIR: [],
  KWT: [ 'IRN', 'SAU' ],
  KGZ: [ 'CHN', 'KAZ', 'TJK', 'UZB' ],
  LAO: [ 'MMR', 'KHM', 'CHN', 'THA', 'VNM' ],
  LVA: [ 'BLR', 'EST', 'LTU', 'RUS' ],
  LBN: [ 'ISR', 'SYR' ],
  LSO: [ 'ZAF' ],
  LBR: [ 'GIN', 'CIV', 'SLE' ],
  LBY: [ 'DZA', 'TCD', 'EGY', 'NER', 'SDN', 'TUN' ],
  LIE: [ 'AUT', 'CHE' ],
  LTU: [ 'BLR', 'LVA', 'POL', 'RUS' ],
  LUX: [ 'BEL', 'FRA', 'DEU' ],
  MAC: [ 'CHN' ],
  MKD: [ 'ALB', 'BGR', 'GRC', 'KOS', 'SRB' ],
  MDG: [],
  MWI: [ 'MOZ', 'TZA', 'ZMB' ],
  MYS: [ 'BRN', 'IDN', 'THA' ],
  MDV: [],
  MLI: [
    'DZA', 'BFA',
    'GIN', 'CIV',
    'MRT', 'NER',
    'SEN'
  ],
  MLT: [],
  MHL: [],
  MTQ: [],
  MRT: [ 'DZA', 'MLI', 'SEN', 'ESH' ],
  MUS: [],
  MYT: [],
  MEX: [ 'BLZ', 'GTM', 'USA' ],
  FSM: [],
  MDA: [ 'ROU', 'UKR' ],
  MCO: [ 'FRA' ],
  MNG: [ 'CHN', 'RUS' ],
  MNE: [ 'ALB', 'BIH', 'HRV', 'KOS', 'SRB' ],
  MSR: [],
  MAR: [ 'DZA', 'ESH', 'ESP' ],
  MOZ: [ 'MWI', 'ZAF', 'SWZ', 'TZA', 'ZMB', 'ZWE' ],
  MMR: [ 'BGD', 'CHN', 'IND', 'LAO', 'THA' ],
  NAM: [ 'AGO', 'BWA', 'ZAF', 'ZMB' ],
  NRU: [],
  NPL: [ 'CHN', 'IND' ],
  NLD: [ 'BEL', 'DEU' ],
  NCL: [],
  NZL: [],
  NIC: [ 'CRI', 'HND' ],
  NER: [
    'DZA', 'BEN',
    'BFA', 'TCD',
    'LBY', 'MLI',
    'NGA'
  ],
  NGA: [ 'BEN', 'CMR', 'TCD', 'NER' ],
  NIU: [],
  NFK: [],
  PRK: [ 'CHN', 'KOR', 'RUS' ],
  MNP: [],
  NOR: [ 'FIN', 'SWE', 'RUS' ],
  OMN: [ 'SAU', 'ARE', 'YEM' ],
  PAK: [ 'AFG', 'CHN', 'IND', 'IRN' ],
  PLW: [],
  PSE: [ 'ISR', 'EGY', 'JOR' ],
  PAN: [ 'COL', 'CRI' ],
  PNG: [ 'IDN' ],
  PRY: [ 'ARG', 'BOL', 'BRA' ],
  PER: [ 'BOL', 'BRA', 'CHL', 'COL', 'ECU' ],
  PHL: [],
  PCN: [],
  POL: [
    'BLR', 'CZE',
    'DEU', 'LTU',
    'RUS', 'SVK',
    'UKR'
  ],
  PRT: [ 'ESP' ],
  PRI: [],
  QAT: [ 'SAU' ],
  KOS: [ 'ALB', 'MKD', 'MNE', 'SRB' ],
  REU: [],
  ROU: [ 'BGR', 'HUN', 'MDA', 'SRB', 'UKR' ],
  RUS: [
    'AZE', 'BLR', 'CHN',
    'EST', 'FIN', 'GEO',
    'KAZ', 'PRK', 'LVA',
    'LTU', 'MNG', 'NOR',
    'POL', 'UKR'
  ],
  RWA: [ 'BDI', 'COD', 'TZA', 'UGA' ],
  BLM: [],
  SHN: [],
  KNA: [],
  LCA: [],
  MAF: [ 'SXM', 'NLD' ],
  SPM: [],
  VCT: [],
  WSM: [],
  SMR: [ 'ITA' ],
  STP: [],
  SAU: [
    'IRQ', 'JOR',
    'KWT', 'OMN',
    'QAT', 'ARE',
    'YEM'
  ],
  SEN: [ 'GMB', 'GIN', 'GNB', 'MLI', 'MRT' ],
  SRB: [
    'BIH', 'BGR',
    'HRV', 'HUN',
    'KOS', 'MKD',
    'MNE', 'ROU'
  ],
  SYC: [],
  SLE: [ 'GIN', 'LBR' ],
  SGP: [],
  SXM: [ 'MAF' ],
  SVK: [ 'AUT', 'CZE', 'HUN', 'POL', 'UKR' ],
  SVN: [ 'AUT', 'HRV', 'ITA', 'HUN' ],
  SLB: [],
  SOM: [ 'DJI', 'ETH', 'KEN' ],
  ZAF: [ 'BWA', 'LSO', 'MOZ', 'NAM', 'SWZ', 'ZWE' ],
  SGS: [],
  KOR: [ 'PRK' ],
  SSD: [ 'CAF', 'COD', 'ETH', 'KEN', 'SDN', 'UGA' ],
  ESP: [ 'AND', 'FRA', 'GIB', 'PRT', 'MAR' ],
  LKA: [ 'IND' ],
  SDN: [
    'CAF', 'TCD',
    'EGY', 'ERI',
    'ETH', 'LBY',
    'SSD'
  ],
  SUR: [ 'BRA', 'GUF', 'FRA', 'GUY' ],
  SJM: [],
  SWZ: [ 'MOZ', 'ZAF' ],
  SWE: [ 'FIN', 'NOR' ],
  CHE: [ 'AUT', 'FRA', 'ITA', 'LIE', 'DEU' ],
  SYR: [ 'IRQ', 'ISR', 'JOR', 'LBN', 'TUR' ],
  TWN: [],
  TJK: [ 'AFG', 'CHN', 'KGZ', 'UZB' ],
  TZA: [
    'BDI', 'COD',
    'KEN', 'MWI',
    'MOZ', 'RWA',
    'UGA', 'ZMB'
  ],
  THA: [ 'MMR', 'KHM', 'LAO', 'MYS' ],
  TLS: [ 'IDN' ],
  TGO: [ 'BEN', 'BFA', 'GHA' ],
  TKL: [],
  TON: [],
  TTO: [],
  TUN: [ 'DZA', 'LBY' ],
  TUR: [
    'ARM', 'AZE',
    'BGR', 'GEO',
    'GRC', 'IRN',
    'IRQ', 'SYR'
  ],
  TKM: [ 'AFG', 'IRN', 'KAZ', 'UZB' ],
  TCA: [],
  TUV: [],
  UGA: [ 'COD', 'KEN', 'RWA', 'SSD', 'TZA' ],
  UKR: [
    'BLR', 'HUN',
    'MDA', 'POL',
    'ROU', 'RUS',
    'SVK'
  ],
  ARE: [ 'OMN', 'SAU' ],
  GBR: [ 'IRL' ],
  USA: [ 'CAN', 'MEX' ],
  URY: [ 'ARG', 'BRA' ],
  UZB: [ 'AFG', 'KAZ', 'KGZ', 'TJK', 'TKM' ],
  VUT: [],
  VEN: [ 'BRA', 'COL', 'GUY' ],
  VNM: [ 'KHM', 'CHN', 'LAO' ],
  WLF: [],
  ESH: [ 'DZA', 'MRT', 'MAR' ],
  YEM: [ 'OMN', 'SAU' ],
  ZMB: [
    'AGO', 'BWA',
    'COD', 'MWI',
    'MOZ', 'NAM',
    'TZA', 'ZWE'
  ],
  ZWE: [ 'BWA', 'MOZ', 'ZAF', 'ZMB' ]
}
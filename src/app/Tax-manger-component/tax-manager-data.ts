export interface PropertyRow {
  sno: number;
  fromYear: string;
  toYear: string;

  roadName: string;
  groupNo: number;
  propertyNo: string;
  owner: string;
  occupantName: string;
  propertyDescription: string;

  constructionYear: number;
  area: number;
  landArea: number;
  buildingArea: number;
  ratePerSqm: number;
  taxRatePercent: number;
  usageType: string;

  capitalValue: number;
  ratePercent: number;
  houseTax: number;
  lightingTax: number;
  healthTax: number;
  waterTax: number;
  totalTax: number;

  previousBalance: number;
  currentYearTax: number;
  additionalTax: number;
  penaltyInterest: number;
  grandTotal: number;

  remarks: string;
  gramPanchayath: string, village: string,
  taluka: string, district: string,
}



export const ROWDATA: PropertyRow[] = [

  {
    sno: 1, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'MG Road', groupNo: 101, propertyNo: 'P-101',
    owner: 'Ramesh', occupantName: 'Ramesh',
    propertyDescription: '2BHK Residential House',
    constructionYear: 2015, area: 120, landArea: 150, buildingArea: 110,
    ratePerSqm: 3500, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 450000, ratePercent: 5,
    houseTax: 8000, lightingTax: 1000, healthTax: 500, waterTax: 2500,
    totalTax: 12000, previousBalance: 2000, currentYearTax: 12000,
    additionalTax: 500, penaltyInterest: 300, grandTotal: 14800,
    remarks: 'Paid partially', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 2, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Nehru Street', groupNo: 102, propertyNo: 'P-102',
    owner: 'Suresh', occupantName: 'Suresh Enterprises',
    propertyDescription: 'Commercial Shop',
    constructionYear: 2012, area: 150, landArea: 200, buildingArea: 140,
    ratePerSqm: 5000, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 750000, ratePercent: 8,
    houseTax: 12000, lightingTax: 1500, healthTax: 800, waterTax: 4200,
    totalTax: 18500, previousBalance: 5000, currentYearTax: 18500,
    additionalTax: 1000, penaltyInterest: 600, grandTotal: 25100,
    remarks: 'Pending payment', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 3, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Station Road', groupNo: 103, propertyNo: 'P-103',
    owner: 'Anita', occupantName: 'Anita',
    propertyDescription: 'Independent House',
    constructionYear: 2018, area: 100, landArea: 130, buildingArea: 95,
    ratePerSqm: 3400, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 400000, ratePercent: 5,
    houseTax: 7000, lightingTax: 900, healthTax: 450, waterTax: 2200,
    totalTax: 10550, previousBalance: 0, currentYearTax: 10550,
    additionalTax: 300, penaltyInterest: 150, grandTotal: 11000,
    remarks: 'Fully paid', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 4, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'Temple Road', groupNo: 104, propertyNo: 'P-104',
    owner: 'Vijay', occupantName: 'Vijay Traders',
    propertyDescription: 'Retail Store',
    constructionYear: 2010, area: 180, landArea: 220, buildingArea: 170,
    ratePerSqm: 5200, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 920000, ratePercent: 8,
    houseTax: 15000, lightingTax: 2000, healthTax: 1000, waterTax: 5000,
    totalTax: 23000, previousBalance: 3000, currentYearTax: 23000,
    additionalTax: 1200, penaltyInterest: 700, grandTotal: 27900,
    remarks: 'Pending', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 5, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Lake View', groupNo: 105, propertyNo: 'P-105',
    owner: 'Lakshmi', occupantName: 'Lakshmi',
    propertyDescription: 'Villa',
    constructionYear: 2020, area: 160, landArea: 200, buildingArea: 150,
    ratePerSqm: 4800, taxRatePercent: 6, usageType: 'Residential',
    capitalValue: 680000, ratePercent: 6,
    houseTax: 11000, lightingTax: 1200, healthTax: 700, waterTax: 3000,
    totalTax: 15900, previousBalance: 0, currentYearTax: 15900,
    additionalTax: 500, penaltyInterest: 250, grandTotal: 16650,
    remarks: 'Paid', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 6, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Market Road', groupNo: 106, propertyNo: 'P-106',
    owner: 'Mahesh', occupantName: 'Mahesh Industries',
    propertyDescription: 'Warehouse',
    constructionYear: 2008, area: 300, landArea: 400, buildingArea: 280,
    ratePerSqm: 6000, taxRatePercent: 10, usageType: 'Industrial',
    capitalValue: 1500000, ratePercent: 10,
    houseTax: 25000, lightingTax: 3000, healthTax: 1500, waterTax: 8000,
    totalTax: 37500, previousBalance: 10000, currentYearTax: 37500,
    additionalTax: 2000, penaltyInterest: 1500, grandTotal: 51000,
    remarks: 'Overdue', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 7, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'Green Park', groupNo: 107, propertyNo: 'P-107',
    owner: 'Deepa', occupantName: 'Deepa',
    propertyDescription: 'Apartment',
    constructionYear: 2016, area: 110, landArea: 140, buildingArea: 100,
    ratePerSqm: 3600, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 420000, ratePercent: 5,
    houseTax: 7500, lightingTax: 900, healthTax: 450, waterTax: 2000,
    totalTax: 10850, previousBalance: 1000, currentYearTax: 10850,
    additionalTax: 300, penaltyInterest: 200, grandTotal: 12350,
    remarks: 'Partial', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 8, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Hill Top', groupNo: 108, propertyNo: 'P-108',
    owner: 'Prakash', occupantName: 'Prakash & Co',
    propertyDescription: 'Office Building',
    constructionYear: 2014, area: 200, landArea: 260, buildingArea: 190,
    ratePerSqm: 5500, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 1100000, ratePercent: 8,
    houseTax: 18000, lightingTax: 2500, healthTax: 1200, waterTax: 6000,
    totalTax: 27700, previousBalance: 4000, currentYearTax: 27700,
    additionalTax: 1500, penaltyInterest: 800, grandTotal: 34000,
    remarks: 'Pending', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 9, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Sunrise Colony', groupNo: 109, propertyNo: 'P-109',
    owner: 'Ravi', occupantName: 'Ravi',
    propertyDescription: 'Residential Flat',
    constructionYear: 2019, area: 130, landArea: 160, buildingArea: 120,
    ratePerSqm: 3800, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 520000, ratePercent: 5,
    houseTax: 9000, lightingTax: 1100, healthTax: 600, waterTax: 2500,
    totalTax: 13200, previousBalance: 0, currentYearTax: 13200,
    additionalTax: 400, penaltyInterest: 200, grandTotal: 13800,
    remarks: 'Paid', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 10, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'River Side', groupNo: 110, propertyNo: 'P-110',
    owner: 'Kavitha', occupantName: 'Kavitha',
    propertyDescription: 'Duplex',
    constructionYear: 2017, area: 140, landArea: 170, buildingArea: 130,
    ratePerSqm: 3900, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 600000, ratePercent: 5,
    houseTax: 10000, lightingTax: 1200, healthTax: 700, waterTax: 2600,
    totalTax: 14500, previousBalance: 1000, currentYearTax: 14500,
    additionalTax: 300, penaltyInterest: 150, grandTotal: 15950,
    remarks: 'Paid', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  // ---------- 11 to 25 similar random structured data ----------

  {
    sno: 11, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Central Avenue', groupNo: 111, propertyNo: 'P-111',
    owner: 'Arun', occupantName: 'Arun Textiles',
    propertyDescription: 'Showroom',
    constructionYear: 2013, area: 170, landArea: 210, buildingArea: 160,
    ratePerSqm: 5200, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 850000, ratePercent: 8,
    houseTax: 14000, lightingTax: 1800, healthTax: 900, waterTax: 4100,
    totalTax: 20800, previousBalance: 3000, currentYearTax: 20800,
    additionalTax: 1000, penaltyInterest: 600, grandTotal: 25400,
    remarks: 'Pending', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 12, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Palm Street', groupNo: 112, propertyNo: 'P-112',
    owner: 'Sneha', occupantName: 'Sneha',
    propertyDescription: 'Residential House',
    constructionYear: 2016, area: 125, landArea: 155, buildingArea: 115,
    ratePerSqm: 3700, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 470000, ratePercent: 5,
    houseTax: 8200, lightingTax: 1000, healthTax: 500, waterTax: 2300,
    totalTax: 12000, previousBalance: 0, currentYearTax: 12000,
    additionalTax: 300, penaltyInterest: 150, grandTotal: 12450,
    remarks: 'Paid', gramPanchayath: 'katlabodi GramPanchayath', village: 'Katlabodi',
    taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 13, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'Industrial Area', groupNo: 113, propertyNo: 'P-113',
    owner: 'Kiran', occupantName: 'Kiran Industries',
    propertyDescription: 'Factory Unit',
    constructionYear: 2009, area: 350, landArea: 450, buildingArea: 330,
    ratePerSqm: 6500, taxRatePercent: 10, usageType: 'Industrial',
    capitalValue: 1500000, ratePercent: 10,
    houseTax: 26000, lightingTax: 3500, healthTax: 2000, waterTax: 9000,
    totalTax: 40500, previousBalance: 8000, currentYearTax: 40500,
    additionalTax: 2000, penaltyInterest: 1500, grandTotal: 52000,
    remarks: 'Overdue', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 14, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Rose Garden', groupNo: 114, propertyNo: 'P-114',
    owner: 'Meena', occupantName: 'Meena',
    propertyDescription: 'Small Residential House',
    constructionYear: 2011, area: 90, landArea: 110, buildingArea: 85,
    ratePerSqm: 3000, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 300000, ratePercent: 5,
    houseTax: 6000, lightingTax: 800, healthTax: 400, waterTax: 1800,
    totalTax: 9000, previousBalance: 500, currentYearTax: 9000,
    additionalTax: 200, penaltyInterest: 100, grandTotal: 9800,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 15, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Bazaar Street', groupNo: 115, propertyNo: 'P-115',
    owner: 'Sanjay', occupantName: 'Sanjay Stores',
    propertyDescription: 'Grocery Shop',
    constructionYear: 2014, area: 145, landArea: 180, buildingArea: 135,
    ratePerSqm: 4800, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 720000, ratePercent: 8,
    houseTax: 12500, lightingTax: 1500, healthTax: 800, waterTax: 3500,
    totalTax: 18300, previousBalance: 2000, currentYearTax: 18300,
    additionalTax: 900, penaltyInterest: 400, grandTotal: 21600,
    remarks: 'Pending', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 16, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'Silver Line', groupNo: 116, propertyNo: 'P-116',
    owner: 'Divya', occupantName: 'Divya',
    propertyDescription: 'Apartment',
    constructionYear: 2017, area: 135, landArea: 165, buildingArea: 125,
    ratePerSqm: 3900, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 520000, ratePercent: 5,
    houseTax: 9500, lightingTax: 1100, healthTax: 600, waterTax: 2600,
    totalTax: 13800, previousBalance: 0, currentYearTax: 13800,
    additionalTax: 400, penaltyInterest: 200, grandTotal: 14400,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 17, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Logistics Park', groupNo: 117, propertyNo: 'P-117',
    owner: 'Harish', occupantName: 'Harish Logistics',
    propertyDescription: 'Warehouse',
    constructionYear: 2011, area: 190, landArea: 240, buildingArea: 175,
    ratePerSqm: 6000, taxRatePercent: 10, usageType: 'Industrial',
    capitalValue: 1350000, ratePercent: 10,
    houseTax: 23000, lightingTax: 2800, healthTax: 1400, waterTax: 7200,
    totalTax: 34400, previousBalance: 5000, currentYearTax: 34400,
    additionalTax: 1500, penaltyInterest: 900, grandTotal: 41800,
    remarks: 'Pending', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 18, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Park Lane', groupNo: 118, propertyNo: 'P-118',
    owner: 'Pooja', occupantName: 'Pooja',
    propertyDescription: 'Residential Flat',
    constructionYear: 2018, area: 115, landArea: 140, buildingArea: 105,
    ratePerSqm: 3600, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 430000, ratePercent: 5,
    houseTax: 7800, lightingTax: 900, healthTax: 500, waterTax: 2100,
    totalTax: 11300, previousBalance: 0, currentYearTax: 11300,
    additionalTax: 300, penaltyInterest: 150, grandTotal: 11750,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 19, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'City Center', groupNo: 119, propertyNo: 'P-119',
    owner: 'Naveen', occupantName: 'Naveen Enterprises',
    propertyDescription: 'Commercial Complex',
    constructionYear: 2013, area: 155, landArea: 200, buildingArea: 145,
    ratePerSqm: 5200, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 880000, ratePercent: 8,
    houseTax: 15000, lightingTax: 1800, healthTax: 900, waterTax: 4000,
    totalTax: 21700, previousBalance: 3000, currentYearTax: 21700,
    additionalTax: 1000, penaltyInterest: 500, grandTotal: 26200,
    remarks: 'Pending', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 20, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Swathi Nagar', groupNo: 120, propertyNo: 'P-120',
    owner: 'Swathi', occupantName: 'Swathi',
    propertyDescription: 'Residential House',
    constructionYear: 2016, area: 105, landArea: 130, buildingArea: 95,
    ratePerSqm: 3400, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 390000, ratePercent: 5,
    houseTax: 7200, lightingTax: 850, healthTax: 450, waterTax: 1900,
    totalTax: 10400, previousBalance: 500, currentYearTax: 10400,
    additionalTax: 250, penaltyInterest: 100, grandTotal: 11250,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 21, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Ajay Colony', groupNo: 121, propertyNo: 'P-121',
    owner: 'Ajay', occupantName: 'Ajay & Sons',
    propertyDescription: 'Commercial Unit',
    constructionYear: 2015, area: 165, landArea: 210, buildingArea: 150,
    ratePerSqm: 5100, taxRatePercent: 8, usageType: 'Commercial',
    capitalValue: 910000, ratePercent: 8,
    houseTax: 15500, lightingTax: 1900, healthTax: 950, waterTax: 4300,
    totalTax: 22650, previousBalance: 2000, currentYearTax: 22650,
    additionalTax: 1000, penaltyInterest: 500, grandTotal: 26150,
    remarks: 'Pending', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 22, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'Rekha Street', groupNo: 122, propertyNo: 'P-122',
    owner: 'Rekha', occupantName: 'Rekha',
    propertyDescription: 'Apartment',
    constructionYear: 2017, area: 140, landArea: 170, buildingArea: 130,
    ratePerSqm: 3800, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 560000, ratePercent: 5,
    houseTax: 9500, lightingTax: 1100, healthTax: 600, waterTax: 2600,
    totalTax: 13800, previousBalance: 0, currentYearTax: 13800,
    additionalTax: 400, penaltyInterest: 200, grandTotal: 14400,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 23, fromYear: '2022–2023', toYear: '2023–2024',
    roadName: 'Mohan Industrial', groupNo: 123, propertyNo: 'P-123',
    owner: 'Mohan', occupantName: 'Mohan Industries',
    propertyDescription: 'Factory',
    constructionYear: 2007, area: 175, landArea: 230, buildingArea: 165,
    ratePerSqm: 6400, taxRatePercent: 10, usageType: 'Industrial',
    capitalValue: 1420000, ratePercent: 10,
    houseTax: 24000, lightingTax: 3000, healthTax: 1500, waterTax: 7500,
    totalTax: 36000, previousBalance: 7000, currentYearTax: 36000,
    additionalTax: 1800, penaltyInterest: 1200, grandTotal: 46000,
    remarks: 'Overdue', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 24, fromYear: '2023–2024', toYear: '2024–2025',
    roadName: 'Garden Street', groupNo: 124, propertyNo: 'P-124',
    owner: 'Teja', occupantName: 'Teja',
    propertyDescription: 'Residential Flat',
    constructionYear: 2019, area: 118, landArea: 150, buildingArea: 108,
    ratePerSqm: 3700, taxRatePercent: 5, usageType: 'Residential',
    capitalValue: 480000, ratePercent: 5,
    houseTax: 8500, lightingTax: 1000, healthTax: 500, waterTax: 2400,
    totalTax: 12400, previousBalance: 0, currentYearTax: 12400,
    additionalTax: 350, penaltyInterest: 150, grandTotal: 12900,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },

  {
    sno: 25, fromYear: '2021–2022', toYear: '2022–2023',
    roadName: 'Elite Avenue', groupNo: 125, propertyNo: 'P-125',
    owner: 'Rahul', occupantName: 'Rahul',
    propertyDescription: 'Luxury Villa',
    constructionYear: 2021, area: 200, landArea: 260, buildingArea: 190,
    ratePerSqm: 6000, taxRatePercent: 6, usageType: 'Residential',
    capitalValue: 1200000, ratePercent: 6,
    houseTax: 20000, lightingTax: 2500, healthTax: 1200, waterTax: 6000,
    totalTax: 29700, previousBalance: 0, currentYearTax: 29700,
    additionalTax: 1000, penaltyInterest: 400, grandTotal: 31100,
    remarks: 'Paid', gramPanchayath: 'Katlabodi GramPanchayath',
    village: 'Katlabodi', taluka: 'Katol', district: 'Nagpur',
  },


];
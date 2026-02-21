export interface GrandTotals {
    previous: any;
    current: any;
    total: any;
}

export interface TaxAmount {
    previous: any;
    current: any;
    total: any;
}

export interface TaxDetails {
    buildingTax: TaxAmount;
    landTax: TaxAmount;
    lightingTax: TaxAmount;
    waterTax: TaxAmount;
    sanitationTax: TaxAmount;
    educationTax: TaxAmount;
    noticeFee: TaxAmount;
    warrantFee: TaxAmount;
    other: TaxAmount;
}

export interface rowdata {

    id: any;

    receiptType: any;
    formNo: any;
    ruleReference: any;

    officeName?: any;
    panchayatSamiti?: any;
    district?: any;

    financialYear: any;
    receiptNo?: any;
    date?: any;

    taxpayerName: any;
    address?: any;
    wardNo: any;
    propertyNo: any;
    plotNo?: any;
    billNo?: any;

    taxDetails: TaxDetails;
    grandTotals: GrandTotals;
}

export const ROWDATA_MR: rowdata[] = [

    {
        id: '१',
        receiptType: 'कर वसुली पावती',
        formNo: 'फॉर्म क्र. १०',
        ruleReference: 'नियम ३२ (४)',

        financialYear: '२०२५-२०२६',
        officeName: 'कळंब ग्रामपंचायत',
        panchayatSamiti: 'कळंब',
        district: 'यवतमाळ',

        receiptNo: 'आरसी-१००१',
        date: '२०२५-०४-१०',

        taxpayerName: 'रमेश पाटील',
        address: 'मुख्य रस्ता, कळंब',

        wardNo: '१',
        propertyNo: 'पी-१०१',
        plotNo: 'प्लॉट-४५',
        billNo: 'बी-७८९',

        taxDetails: {
            buildingTax: { previous: '१२००', current: '२६०', total: '१४६०' },
            landTax: { previous: '३००', current: '२००', total: '५००' },
            lightingTax: { previous: '६०', current: '६०', total: '१२०' },
            waterTax: { previous: '१२०', current: '१३०', total: '२५०' },
            sanitationTax: { previous: '९०', current: '९०', total: '१८०' },
            educationTax: { previous: '४५', current: '४५', total: '९०' },
            noticeFee: { previous: '०', current: '५०', total: '५०' },
            warrantFee: { previous: '०', current: '०', total: '०' },
            other: { previous: '२०', current: '२०', total: '४०' }
        },

        grandTotals: { previous: '१८३५', current: '८५५', total: '२६९०' }
    },

    {
        id: '२',
        receiptType: 'कर वसुली पावती',
        formNo: 'फॉर्म क्र. १०',
        ruleReference: 'नियम ३२ (४)',

        financialYear: '२०२५-२०२६',
        officeName: 'कळंब ग्रामपंचायत',
        panchayatSamiti: 'कळंब',
        district: 'यवतमाळ',

        receiptNo: 'आरसी-१००२',
        date: '२०२५-०४-१२',

        taxpayerName: 'सुरेश पाटील',
        address: 'स्टेशन रोड, कळंब',

        wardNo: '२',
        propertyNo: 'पी-१०२',
        plotNo: 'प्लॉट-१८',
        billNo: 'बी-७९०',

        taxDetails: {
            buildingTax: { previous: '१५००', current: '४००', total: '१९००' },
            landTax: { previous: '३००', current: '२००', total: '५००' },
            lightingTax: { previous: '७०', current: '७०', total: '१४०' },
            waterTax: { previous: '१५०', current: '१५०', total: '३००' },
            sanitationTax: { previous: '८०', current: '८०', total: '१६०' },
            educationTax: { previous: '४०', current: '४०', total: '८०' },
            noticeFee: { previous: '०', current: '५०', total: '५०' },
            warrantFee: { previous: '०', current: '०', total: '०' },
            other: { previous: '२५', current: '२५', total: '५०' }
        },

        grandTotals: { previous: '२१६५', current: '१०१५', total: '३१८०' }
    },

    {
        id: '३',
        receiptType: 'कर वसुली पावती',
        formNo: 'फॉर्म क्र. १०',
        ruleReference: 'नियम ३२ (४)',

        financialYear: '२०२५-२०२६',
        officeName: 'कळंब ग्रामपंचायत',
        panchayatSamiti: 'कळंब',
        district: 'यवतमाळ',

        receiptNo: 'आरसी-१००३',
        date: '२०२५-०४-१५',

        taxpayerName: 'अनिता देशमुख',
        address: 'मंदिर रोड, कळंब',

        wardNo: '३',
        propertyNo: 'पी-१०३',
        plotNo: 'प्लॉट-२२',
        billNo: 'बी-७९१',

        taxDetails: {
            buildingTax: { previous: '१०००', current: '३००', total: '१३००' },
            landTax: { previous: '२००', current: '१५०', total: '३५०' },
            lightingTax: { previous: '५०', current: '५०', total: '१००' },
            waterTax: { previous: '१००', current: '१२०', total: '२२०' },
            sanitationTax: { previous: '७०', current: '७०', total: '१४०' },
            educationTax: { previous: '३५', current: '३५', total: '७०' },
            noticeFee: { previous: '०', current: '०', total: '०' },
            warrantFee: { previous: '०', current: '०', total: '०' },
            other: { previous: '२०', current: '२०', total: '४०' }
        },

        grandTotals: { previous: '१४७५', current: '७४५', total: '२२२०' }
    },

    {
        id: '४',
        receiptType: 'कर वसुली पावती',
        formNo: 'फॉर्म क्र. १०',
        ruleReference: 'नियम ३२ (४)',

        financialYear: '२०२५-२०२६',
        officeName: 'कळंब ग्रामपंचायत',
        panchayatSamiti: 'कळंब',
        district: 'यवतमाळ',

        receiptNo: 'आरसी-१००४',
        date: '२०२५-०४-१८',

        taxpayerName: 'विजय शिंदे',
        address: 'मार्केट रोड, कळंब',

        wardNo: '४',
        propertyNo: 'पी-१०४',
        plotNo: 'प्लॉट-३०',
        billNo: 'बी-७९२',

        taxDetails: {
            buildingTax: { previous: '२५००', current: '८००', total: '३३००' },
            landTax: { previous: '५००', current: '३००', total: '८००' },
            lightingTax: { previous: '१००', current: '१००', total: '२००' },
            waterTax: { previous: '२००', current: '२५०', total: '४५०' },
            sanitationTax: { previous: '१५०', current: '१५०', total: '३००' },
            educationTax: { previous: '७५', current: '७५', total: '१५०' },
            noticeFee: { previous: '५०', current: '५०', total: '१००' },
            warrantFee: { previous: '०', current: '०', total: '०' },
            other: { previous: '४०', current: '४०', total: '८०' }
        },

        grandTotals: { previous: '४११५', current: '१७६५', total: '५८८०' }
    },

    {
        id: '५',
        receiptType: 'कर वसुली पावती',
        formNo: 'फॉर्म क्र. १०',
        ruleReference: 'नियम ३२ (४)',

        financialYear: '२०२५-२०२६',
        officeName: 'कळंब ग्रामपंचायत',
        panchayatSamiti: 'कळंब',
        district: 'यवतमाळ',

        receiptNo: 'आरसी-१००५',
        date: '२०२५-०४-२०',

        taxpayerName: 'लक्ष्मी राव',
        address: 'लेक व्ह्यू कॉलनी, कळंब',

        wardNo: '५',
        propertyNo: 'पी-१०५',
        plotNo: 'प्लॉट-१४',
        billNo: 'बी-७९३',

        taxDetails: {
            buildingTax: { previous: '१८००', current: '६००', total: '२४००' },
            landTax: { previous: '३५०', current: '२५०', total: '६००' },
            lightingTax: { previous: '८०', current: '८०', total: '१६०' },
            waterTax: { previous: '१५०', current: '१७०', total: '३२०' },
            sanitationTax: { previous: '१००', current: '१००', total: '२००' },
            educationTax: { previous: '५०', current: '५०', total: '१००' },
            noticeFee: { previous: '०', current: '०', total: '०' },
            warrantFee: { previous: '०', current: '०', total: '०' },
            other: { previous: '३०', current: '३०', total: '६०' }
        },

        grandTotals: { previous: '२५६०', current: '१२८०', total: '३८४०' }
    }

];

export const ROWDATA: rowdata[] = [

    {
        id: 1,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1001",
        date: "2025-04-10",
        taxpayerName: "Ramesh Patil",
        address: "Main Road, Kalamb",
        wardNo: 1,
        propertyNo: "P-101",
        plotNo: "Plot-45",
        billNo: "B-789",
        taxDetails: {
            buildingTax: { previous: 1200, current: 260, total: 1460 },
            landTax: { previous: 300, current: 200, total: 500 },
            lightingTax: { previous: 60, current: 60, total: 120 },
            waterTax: { previous: 120, current: 130, total: 250 },
            sanitationTax: { previous: 90, current: 90, total: 180 },
            educationTax: { previous: 45, current: 45, total: 90 },
            noticeFee: { previous: 0, current: 50, total: 50 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 20, current: 20, total: 40 }
        },
        grandTotals: { previous: 1835, current: 855, total: 2690 }
    },

    {
        id: 2,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1002",
        date: "2025-04-12",
        taxpayerName: "Suresh Patil",
        address: "Station Road, Kalamb",
        wardNo: 2,
        propertyNo: "P-102",
        plotNo: "Plot-18",
        billNo: "B-790",
        taxDetails: {
            buildingTax: { previous: 1500, current: 400, total: 1900 },
            landTax: { previous: 300, current: 200, total: 500 },
            lightingTax: { previous: 70, current: 70, total: 140 },
            waterTax: { previous: 150, current: 150, total: 300 },
            sanitationTax: { previous: 80, current: 80, total: 160 },
            educationTax: { previous: 40, current: 40, total: 80 },
            noticeFee: { previous: 0, current: 50, total: 50 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 25, current: 25, total: 50 }
        },
        grandTotals: { previous: 2165, current: 1015, total: 3180 }
    },

    {
        id: 3,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1003",
        date: "2025-04-15",
        taxpayerName: "Anita Deshmukh",
        address: "Temple Road, Kalamb",
        wardNo: 3,
        propertyNo: "P-103",
        plotNo: "Plot-22",
        billNo: "B-791",
        taxDetails: {
            buildingTax: { previous: 1000, current: 300, total: 1300 },
            landTax: { previous: 200, current: 150, total: 350 },
            lightingTax: { previous: 50, current: 50, total: 100 },
            waterTax: { previous: 100, current: 120, total: 220 },
            sanitationTax: { previous: 70, current: 70, total: 140 },
            educationTax: { previous: 35, current: 35, total: 70 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 20, current: 20, total: 40 }
        },
        grandTotals: { previous: 1475, current: 745, total: 2220 }
    },

    {
        id: 4,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1004",
        date: "2025-04-18",
        taxpayerName: "Vijay Shinde",
        address: "Market Road, Kalamb",
        wardNo: 4,
        propertyNo: "P-104",
        plotNo: "Plot-30",
        billNo: "B-792",
        taxDetails: {
            buildingTax: { previous: 2500, current: 800, total: 3300 },
            landTax: { previous: 500, current: 300, total: 800 },
            lightingTax: { previous: 100, current: 100, total: 200 },
            waterTax: { previous: 200, current: 250, total: 450 },
            sanitationTax: { previous: 150, current: 150, total: 300 },
            educationTax: { previous: 75, current: 75, total: 150 },
            noticeFee: { previous: 50, current: 50, total: 100 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 40, current: 40, total: 80 }
        },
        grandTotals: { previous: 4115, current: 1765, total: 5880 }
    },
    {
        id: 5,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1005",
        date: "2025-04-20",
        taxpayerName: "Lakshmi Rao",
        address: "Lake View Colony, Kalamb",
        wardNo: 5,
        propertyNo: "P-105",
        plotNo: "Plot-14",
        billNo: "B-793",
        taxDetails: {
            buildingTax: { previous: 1800, current: 600, total: 2400 },
            landTax: { previous: 350, current: 250, total: 600 },
            lightingTax: { previous: 80, current: 80, total: 160 },
            waterTax: { previous: 150, current: 170, total: 320 },
            sanitationTax: { previous: 100, current: 100, total: 200 },
            educationTax: { previous: 50, current: 50, total: 100 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 30, current: 30, total: 60 }
        },
        grandTotals: { previous: 2560, current: 1280, total: 3840 }
    },

    {
        id: 6,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1006",
        date: "2025-04-22",
        taxpayerName: "Mahesh Kulkarni",
        address: "Industrial Area, Kalamb",
        wardNo: 6,
        propertyNo: "P-106",
        plotNo: "Plot-40",
        billNo: "B-794",
        taxDetails: {
            buildingTax: { previous: 3000, current: 900, total: 3900 },
            landTax: { previous: 600, current: 400, total: 1000 },
            lightingTax: { previous: 120, current: 120, total: 240 },
            waterTax: { previous: 250, current: 300, total: 550 },
            sanitationTax: { previous: 180, current: 180, total: 360 },
            educationTax: { previous: 90, current: 90, total: 180 },
            noticeFee: { previous: 100, current: 50, total: 150 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 50, current: 50, total: 100 }
        },
        grandTotals: { previous: 4390, current: 2090, total: 6480 }
    },

    {
        id: 7,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1007",
        date: "2025-04-25",
        taxpayerName: "Deepa Joshi",
        address: "Green Park, Kalamb",
        wardNo: 7,
        propertyNo: "P-107",
        plotNo: "Plot-19",
        billNo: "B-795",
        taxDetails: {
            buildingTax: { previous: 1400, current: 450, total: 1850 },
            landTax: { previous: 280, current: 220, total: 500 },
            lightingTax: { previous: 60, current: 60, total: 120 },
            waterTax: { previous: 130, current: 150, total: 280 },
            sanitationTax: { previous: 90, current: 90, total: 180 },
            educationTax: { previous: 45, current: 45, total: 90 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 25, current: 25, total: 50 }
        },
        grandTotals: { previous: 2030, current: 1040, total: 3070 }
    },

    {
        id: 8,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1008",
        date: "2025-04-28",
        taxpayerName: "Prakash Shah",
        address: "Hill Top Area, Kalamb",
        wardNo: 8,
        propertyNo: "P-108",
        plotNo: "Plot-28",
        billNo: "B-796",
        taxDetails: {
            buildingTax: { previous: 2100, current: 700, total: 2800 },
            landTax: { previous: 450, current: 300, total: 750 },
            lightingTax: { previous: 90, current: 90, total: 180 },
            waterTax: { previous: 170, current: 200, total: 370 },
            sanitationTax: { previous: 120, current: 120, total: 240 },
            educationTax: { previous: 60, current: 60, total: 120 },
            noticeFee: { previous: 0, current: 50, total: 50 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 35, current: 35, total: 70 }
        },
        grandTotals: { previous: 3025, current: 1555, total: 4580 }
    },

    {
        id: 9,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1009",
        date: "2025-05-01",
        taxpayerName: "Ravi More",
        address: "Sunrise Colony, Kalamb",
        wardNo: 9,
        propertyNo: "P-109",
        plotNo: "Plot-16",
        billNo: "B-797",
        taxDetails: {
            buildingTax: { previous: 1600, current: 500, total: 2100 },
            landTax: { previous: 320, current: 240, total: 560 },
            lightingTax: { previous: 70, current: 70, total: 140 },
            waterTax: { previous: 140, current: 160, total: 300 },
            sanitationTax: { previous: 100, current: 100, total: 200 },
            educationTax: { previous: 50, current: 50, total: 100 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 30, current: 30, total: 60 }
        },
        grandTotals: { previous: 2310, current: 1150, total: 3460 }
    },
    {
        id: 10,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1010",
        date: "2025-05-03",
        taxpayerName: "Kavita Shinde",
        address: "River Side, Kalamb",
        wardNo: 10,
        propertyNo: "P-110",
        plotNo: "Plot-20",
        billNo: "B-798",
        taxDetails: {
            buildingTax: { previous: 1700, current: 550, total: 2250 },
            landTax: { previous: 350, current: 250, total: 600 },
            lightingTax: { previous: 80, current: 80, total: 160 },
            waterTax: { previous: 150, current: 170, total: 320 },
            sanitationTax: { previous: 110, current: 110, total: 220 },
            educationTax: { previous: 55, current: 55, total: 110 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 30, current: 30, total: 60 }
        },
        grandTotals: { previous: 2475, current: 1245, total: 3720 }
    },

    {
        id: 11,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1011",
        date: "2025-05-05",
        taxpayerName: "Arun Textiles",
        address: "Central Avenue, Kalamb",
        wardNo: 11,
        propertyNo: "P-111",
        plotNo: "Plot-31",
        billNo: "B-799",
        taxDetails: {
            buildingTax: { previous: 2200, current: 750, total: 2950 },
            landTax: { previous: 420, current: 300, total: 720 },
            lightingTax: { previous: 90, current: 90, total: 180 },
            waterTax: { previous: 180, current: 200, total: 380 },
            sanitationTax: { previous: 130, current: 130, total: 260 },
            educationTax: { previous: 65, current: 65, total: 130 },
            noticeFee: { previous: 0, current: 50, total: 50 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 40, current: 40, total: 80 }
        },
        grandTotals: { previous: 3125, current: 1625, total: 4750 }
    },

    {
        id: 12,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1012",
        date: "2025-05-07",
        taxpayerName: "Sneha Patil",
        address: "Palm Street, Kalamb",
        wardNo: 12,
        propertyNo: "P-112",
        plotNo: "Plot-11",
        billNo: "B-800",
        taxDetails: {
            buildingTax: { previous: 1400, current: 450, total: 1850 },
            landTax: { previous: 280, current: 220, total: 500 },
            lightingTax: { previous: 60, current: 60, total: 120 },
            waterTax: { previous: 130, current: 150, total: 280 },
            sanitationTax: { previous: 90, current: 90, total: 180 },
            educationTax: { previous: 45, current: 45, total: 90 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 25, current: 25, total: 50 }
        },
        grandTotals: { previous: 2030, current: 1040, total: 3070 }
    },

    {
        id: 13,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1013",
        date: "2025-05-09",
        taxpayerName: "Kiran Industries",
        address: "Industrial Layout, Kalamb",
        wardNo: 13,
        propertyNo: "P-113",
        plotNo: "Plot-44",
        billNo: "B-801",
        taxDetails: {
            buildingTax: { previous: 3200, current: 1000, total: 4200 },
            landTax: { previous: 600, current: 450, total: 1050 },
            lightingTax: { previous: 120, current: 120, total: 240 },
            waterTax: { previous: 250, current: 300, total: 550 },
            sanitationTax: { previous: 180, current: 180, total: 360 },
            educationTax: { previous: 90, current: 90, total: 180 },
            noticeFee: { previous: 100, current: 50, total: 150 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 50, current: 50, total: 100 }
        },
        grandTotals: { previous: 4590, current: 2240, total: 6830 }
    },
    {
        id: 14,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1014",
        date: "2025-05-11",
        taxpayerName: "Meena Joshi",
        address: "Rose Garden Area, Kalamb",
        wardNo: 14,
        propertyNo: "P-114",
        plotNo: "Plot-09",
        billNo: "B-802",
        taxDetails: {
            buildingTax: { previous: 1300, current: 400, total: 1700 },
            landTax: { previous: 250, current: 200, total: 450 },
            lightingTax: { previous: 60, current: 60, total: 120 },
            waterTax: { previous: 120, current: 140, total: 260 },
            sanitationTax: { previous: 80, current: 80, total: 160 },
            educationTax: { previous: 40, current: 40, total: 80 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 20, current: 20, total: 40 }
        },
        grandTotals: { previous: 1870, current: 940, total: 2810 }
    },

    {
        id: 15,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1015",
        date: "2025-05-13",
        taxpayerName: "Sanjay Stores",
        address: "Bazaar Street, Kalamb",
        wardNo: 15,
        propertyNo: "P-115",
        plotNo: "Plot-25",
        billNo: "B-803",
        taxDetails: {
            buildingTax: { previous: 2400, current: 800, total: 3200 },
            landTax: { previous: 500, current: 350, total: 850 },
            lightingTax: { previous: 100, current: 100, total: 200 },
            waterTax: { previous: 200, current: 230, total: 430 },
            sanitationTax: { previous: 150, current: 150, total: 300 },
            educationTax: { previous: 75, current: 75, total: 150 },
            noticeFee: { previous: 50, current: 50, total: 100 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 40, current: 40, total: 80 }
        },
        grandTotals: { previous: 3515, current: 1795, total: 5310 }
    },

    {
        id: 16,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1016",
        date: "2025-05-15",
        taxpayerName: "Divya Kulkarni",
        address: "Silver Line Colony, Kalamb",
        wardNo: 16,
        propertyNo: "P-116",
        plotNo: "Plot-34",
        billNo: "B-804",
        taxDetails: {
            buildingTax: { previous: 1500, current: 500, total: 2000 },
            landTax: { previous: 300, current: 250, total: 550 },
            lightingTax: { previous: 70, current: 70, total: 140 },
            waterTax: { previous: 140, current: 160, total: 300 },
            sanitationTax: { previous: 100, current: 100, total: 200 },
            educationTax: { previous: 50, current: 50, total: 100 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 30, current: 30, total: 60 }
        },
        grandTotals: { previous: 2190, current: 1160, total: 3350 }
    },

    {
        id: 17,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1017",
        date: "2025-05-17",
        taxpayerName: "Harish Logistics",
        address: "Logistics Park, Kalamb",
        wardNo: 17,
        propertyNo: "P-117",
        plotNo: "Plot-41",
        billNo: "B-805",
        taxDetails: {
            buildingTax: { previous: 2800, current: 900, total: 3700 },
            landTax: { previous: 550, current: 400, total: 950 },
            lightingTax: { previous: 110, current: 110, total: 220 },
            waterTax: { previous: 220, current: 260, total: 480 },
            sanitationTax: { previous: 160, current: 160, total: 320 },
            educationTax: { previous: 80, current: 80, total: 160 },
            noticeFee: { previous: 100, current: 50, total: 150 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 45, current: 45, total: 90 }
        },
        grandTotals: { previous: 4065, current: 2005, total: 6070 }
    },

    {
        id: 18,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1018",
        date: "2025-05-19",
        taxpayerName: "Pooja Sharma",
        address: "Park Lane, Kalamb",
        wardNo: 18,
        propertyNo: "P-118",
        plotNo: "Plot-27",
        billNo: "B-806",
        taxDetails: {
            buildingTax: { previous: 1400, current: 450, total: 1850 },
            landTax: { previous: 280, current: 220, total: 500 },
            lightingTax: { previous: 60, current: 60, total: 120 },
            waterTax: { previous: 130, current: 150, total: 280 },
            sanitationTax: { previous: 90, current: 90, total: 180 },
            educationTax: { previous: 45, current: 45, total: 90 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 25, current: 25, total: 50 }
        },
        grandTotals: { previous: 2030, current: 1040, total: 3070 }
    },

    {
        id: 19,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1019",
        date: "2025-05-21",
        taxpayerName: "Naveen Enterprises",
        address: "City Center, Kalamb",
        wardNo: 19,
        propertyNo: "P-119",
        plotNo: "Plot-38",
        billNo: "B-807",
        taxDetails: {
            buildingTax: { previous: 2300, current: 750, total: 3050 },
            landTax: { previous: 450, current: 320, total: 770 },
            lightingTax: { previous: 90, current: 90, total: 180 },
            waterTax: { previous: 180, current: 200, total: 380 },
            sanitationTax: { previous: 130, current: 130, total: 260 },
            educationTax: { previous: 65, current: 65, total: 130 },
            noticeFee: { previous: 50, current: 50, total: 100 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 40, current: 40, total: 80 }
        },
        grandTotals: { previous: 3305, current: 1645, total: 4950 }
    },

    {
        id: 20,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1020",
        date: "2025-05-23",
        taxpayerName: "Swathi Patil",
        address: "Swathi Nagar, Kalamb",
        wardNo: 20,
        propertyNo: "P-120",
        plotNo: "Plot-15",
        billNo: "B-808",
        taxDetails: {
            buildingTax: { previous: 1500, current: 500, total: 2000 },
            landTax: { previous: 300, current: 250, total: 550 },
            lightingTax: { previous: 70, current: 70, total: 140 },
            waterTax: { previous: 140, current: 160, total: 300 },
            sanitationTax: { previous: 100, current: 100, total: 200 },
            educationTax: { previous: 50, current: 50, total: 100 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 30, current: 30, total: 60 }
        },
        grandTotals: { previous: 2190, current: 1160, total: 3350 }
    },

    {
        id: 21,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1021",
        date: "2025-05-25",
        taxpayerName: "Ajay & Sons",
        address: "Ajay Colony, Kalamb",
        wardNo: 21,
        propertyNo: "P-121",
        plotNo: "Plot-29",
        billNo: "B-809",
        taxDetails: {
            buildingTax: { previous: 2100, current: 700, total: 2800 },
            landTax: { previous: 400, current: 300, total: 700 },
            lightingTax: { previous: 90, current: 90, total: 180 },
            waterTax: { previous: 170, current: 200, total: 370 },
            sanitationTax: { previous: 120, current: 120, total: 240 },
            educationTax: { previous: 60, current: 60, total: 120 },
            noticeFee: { previous: 50, current: 50, total: 100 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 35, current: 35, total: 70 }
        },
        grandTotals: { previous: 3025, current: 1555, total: 4580 }
    },

    {
        id: 22,
        receiptType: "Tax Collection Receipt",
        formNo: "Form No. 10",
        ruleReference: "Rule 32 (4)",
        financialYear: "2025-2026",
        officeName: "Kalamb Gram Panchayat",
        panchayatSamiti: "Kalamb",
        district: "Yavatmal",
        receiptNo: "RC-1022",
        date: "2025-05-27",
        taxpayerName: "Rekha Patil",
        address: "Rekha Street, Kalamb",
        wardNo: 22,
        propertyNo: "P-122",
        plotNo: "Plot-32",
        billNo: "B-810",
        taxDetails: {
            buildingTax: { previous: 1600, current: 500, total: 2100 },
            landTax: { previous: 320, current: 240, total: 560 },
            lightingTax: { previous: 70, current: 70, total: 140 },
            waterTax: { previous: 140, current: 160, total: 300 },
            sanitationTax: { previous: 100, current: 100, total: 200 },
            educationTax: { previous: 50, current: 50, total: 100 },
            noticeFee: { previous: 0, current: 0, total: 0 },
            warrantFee: { previous: 0, current: 0, total: 0 },
            other: { previous: 30, current: 30, total: 60 }
        },
        grandTotals: { previous: 2310, current: 1150, total: 3460 }
    },
];


// ======================= INTERFACES =======================

export interface SocialDetails {
    religion: {
        hindu: boolean;
        muslim: boolean;
        christian: boolean;
        other: boolean;
    };
    occupation: string;
}

export interface MedicalDetails {
    medical_attention_received: boolean;

    type_of_medical_institution: {
        government: boolean;
        private: boolean;
        none: boolean;
    };

    doctor_name: string | null;

    cause_of_death: {
        primary_cause: string;
        secondary_cause: string | null;
    };

    duration_of_illness: string | null;
}

export interface StatisticalInformation {
    medically_certified: boolean;
    post_mortem_conducted: boolean;
    female_pregnant_at_time_of_death: boolean | null;

    tobacco_consumption: {
        yes: boolean;
        no: boolean;
        duration_years: number | null;
    };

    alcohol_consumption: {
        yes: boolean;
        no: boolean;
        duration_years: number | null;
    };

    betel_pan_consumption: {
        yes: boolean;
        no: boolean;
        duration_years: number | null;
    };
}

export interface InformantDetails {
    name: string;
    relationship_to_deceased: string;
    address: string;
    signature_present: boolean;
}

export interface RegistrationDetails {
    registration_number: string;
    registration_date: string;
    registration_year: number;
    registration_unit_code: string;
    local_body_name: string;
    registrar_name: string;
    registrar_signature_present: boolean;
    official_seal_present: boolean;
}

export interface RegistrationLocationDetails {
    district: string;
    taluka: string;
    village: string;
    registration_office_name: string;
}

export interface PlaceOfDeathDetails {
    place_type: {
        hospital: boolean;
        home: boolean;
        other: boolean;
    };

    hospital_name: string | null;
    address_of_place: string;
}

export interface ResidenceDetails {
    house_number: string;
    street_area: string;
    village_town: string;
    taluka: string;
    district: string;
    state: string;
}

export interface DeceasedDetails {
    date_of_death: string;
    time_of_death: string;
    name_of_deceased: string;

    sex: {
        male: boolean;
        female: boolean;
        other: boolean;
    };

    age_at_death: {
        years: number;
        months: number;
        days: number;
    };

    marital_status: string;
    spouse_name: string | null;
}

export interface DeathRegistrationForm {
    id: number | string;

    document_type: string;
    form_number: string;
    legal_reference: string;
    aadhaar_number: string;
    statistical_declaration: boolean;
    government_seal_present: boolean;
    office_stamp_present: boolean;

    deceased_details: DeceasedDetails;
    residence_details: ResidenceDetails;
    place_of_death_details: PlaceOfDeathDetails;
    social_details: SocialDetails;
    medical_details: MedicalDetails;
    statistical_information: StatisticalInformation;
    informant_details: InformantDetails;
    registration_details: RegistrationDetails;
    registration_location_details: RegistrationLocationDetails;
}


// ======================= ENGLISH DATA =======================

export const ROWDATA: DeathRegistrationForm[] = [

    {
        id: 1,
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "2866 8929 0466",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "21/10/2022",
            time_of_death: "08:30 AM",
            name_of_deceased: "Madhukar Ram Korde",
            sex: { male: true, female: false, other: false },
            age_at_death: { years: 60, months: 0, days: 0 },
            marital_status: "Married",
            spouse_name: "Shanta Madhukar Korde"
        },

        residence_details: {
            house_number: "H.No. 45",
            street_area: "Main Road",
            village_town: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra"
        },

        place_of_death_details: {
            place_type: { hospital: true, home: false, other: false },
            hospital_name: "Government Hospital Katol",
            address_of_place: "Katol, Nagpur"
        },

        social_details: {
            religion: { hindu: true, muslim: false, christian: false, other: false },
            occupation: "Farmer"
        },

        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: { government: true, private: false, none: false },
            doctor_name: "Dr. S. Patil",
            cause_of_death: {
                primary_cause: "Cardiac Arrest",
                secondary_cause: "Hypertension"
            },
            duration_of_illness: "2 Years"
        },

        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: true, no: false, duration_years: 20 },
            alcohol_consumption: { yes: false, no: true, duration_years: 0 },
            betel_pan_consumption: { yes: true, no: false, duration_years: 15 }
        },

        informant_details: {
            name: "Ramesh Korde",
            relationship_to_deceased: "Son",
            address: "H.No. 45, Main Road, Katlabodi",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-2022-002",
            registration_date: "21/10/2022",
            registration_year: 2022,
            registration_unit_code: "GP-KAT-01",
            local_body_name: "Gram Panchayat Katlabodi",
            registrar_name: "Sunita Deshmukh",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "Nagpur",
            taluka: "Katol",
            village: "Katlabodi",
            registration_office_name: "Gram Panchayat Katlabodi"
        }
    },

    {
        id: 2,
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "4587 2234 1190",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "05/01/2023",
            time_of_death: "10:15 PM",
            name_of_deceased: "Suresh Kumar Yadav",
            sex: { male: true, female: false, other: false },
            age_at_death: { years: 52, months: 0, days: 0 },
            marital_status: "Married",
            spouse_name: "Meena Yadav"
        },

        residence_details: {
            house_number: "12A",
            street_area: "Station Road",
            village_town: "Wardha",
            taluka: "Wardha",
            district: "Wardha",
            state: "Maharashtra"
        },

        place_of_death_details: {
            place_type: { hospital: true, home: false, other: false },
            hospital_name: "District Hospital Wardha",
            address_of_place: "Wardha"
        },

        social_details: {
            religion: { hindu: true, muslim: false, christian: false, other: false },
            occupation: "Shopkeeper"
        },

        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: { government: true, private: false, none: false },
            doctor_name: "Dr. R. Kulkarni",
            cause_of_death: { primary_cause: "Heart Attack", secondary_cause: "Diabetes" },
            duration_of_illness: "3 Years"
        },

        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: true, no: false, duration_years: 25 },
            alcohol_consumption: { yes: false, no: true, duration_years: 0 },
            betel_pan_consumption: { yes: true, no: false, duration_years: 10 }
        },

        informant_details: {
            name: "Rohit Yadav",
            relationship_to_deceased: "Son",
            address: "12A Station Road Wardha",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-2023-011",
            registration_date: "06/01/2023",
            registration_year: 2023,
            registration_unit_code: "WRD-01",
            local_body_name: "Wardha Municipal Council",
            registrar_name: "Anita Deshpande",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "Wardha",
            taluka: "Wardha",
            village: "Wardha",
            registration_office_name: "Wardha Municipal Council"
        }
    }

    // 👉 Remaining records 3–7 follow SAME STRUCTURE
];


// ======================= MARATHI DATA =======================

export const ROWDATA_MR: DeathRegistrationForm[] = [

    {
        id: "१",

        document_type: "मृत्यू नोंदणी अर्ज",
        form_number: "फॉर्म क्र. २",
        legal_reference: "जन्म व मृत्यू नोंदणी नियम",
        aadhaar_number: "२८६६ ८९२९ ०४६६",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "२१/१०/२०२२",
            time_of_death: "०८:३० AM",
            name_of_deceased: "मधुकर राम कोर्डे",
            sex: { male: true, female: false, other: false },
            age_at_death: { years: 60, months: 0, days: 0 },
            marital_status: "विवाहित",
            spouse_name: "शांता मधुकर कोर्डे"
        },

        residence_details: {
            house_number: "H.No. ४५",
            street_area: "Main Road",
            village_town: "काटलबोडी",
            taluka: "काटोल",
            district: "नागपूर",
            state: "महाराष्ट्र"
        },

        place_of_death_details: {
            place_type: { hospital: true, home: false, other: false },
            hospital_name: "शासकीय रुग्णालय काटोल",
            address_of_place: "काटोल, नागपूर"
        },

        social_details: {
            religion: { hindu: true, muslim: false, christian: false, other: false },
            occupation: "शेतकरी"
        },

        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: { government: true, private: false, none: false },
            doctor_name: "डॉ. एस. पाटील",
            cause_of_death: {
                primary_cause: "हृदयविकाराचा झटका",
                secondary_cause: "उच्च रक्तदाब"
            },
            duration_of_illness: "२ वर्षे"
        },

        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: true, no: false, duration_years: 20 },
            alcohol_consumption: { yes: false, no: true, duration_years: 0 },
            betel_pan_consumption: { yes: true, no: false, duration_years: 15 }
        },

        informant_details: {
            name: "रमेश कोर्डे",
            relationship_to_deceased: "मुलगा",
            address: "H.No. ४५, Main Road, काटलबोडी",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-२०२२-००२",
            registration_date: "२१/१०/२०२२",
            registration_year: 2022,
            registration_unit_code: "GP-KAT-०१",
            local_body_name: "ग्राम पंचायत काटलबोडी",
            registrar_name: "सुनीता देशमुख",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "नागपूर",
            taluka: "काटोल",
            village: "काटलबोडी",
            registration_office_name: "ग्राम पंचायत काटलबोडी"
        }

    }

];
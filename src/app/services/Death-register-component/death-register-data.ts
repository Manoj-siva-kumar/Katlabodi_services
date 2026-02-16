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
    id: number;

    // Header
    document_type: string;
    form_number: string;
    legal_reference: string;
    aadhaar_number: string;
    statistical_declaration: boolean;
    government_seal_present: boolean;
    office_stamp_present: boolean;

    // Sections
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




export const ROWDATA = [
    {
        id: 1,

        // ================= HEADER =================
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "2866 8929 0466",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        // ================= DECEASED DETAILS =================
        deceased_details: {
            date_of_death: "21/10/2022",
            time_of_death: "08:30 AM",
            name_of_deceased: "Madhukar Ram Korde",
            sex: {
                male: true,
                female: false,
                other: false
            },
            age_at_death: {
                years: 60,
                months: 0,
                days: 0
            },
            marital_status: "Married",
            spouse_name: "Shanta Madhukar Korde"
        },

        // ================= ADDRESS DETAILS =================
        residence_details: {
            house_number: "H.No. 45",
            street_area: "Main Road",
            village_town: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra"
        },

        place_of_death_details: {
            place_type: {
                hospital: true,
                home: false,
                other: false
            },
            hospital_name: "Government Hospital Katol",
            address_of_place: "Katol, Nagpur"
        },

        // ================= RELIGION & OCCUPATION =================
        social_details: {
            religion: {
                hindu: true,
                muslim: false,
                christian: false,
                other: false
            },
            occupation: "Farmer"
        },

        // ================= MEDICAL DETAILS =================
        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: {
                government: true,
                private: false,
                none: false
            },
            doctor_name: "Dr. S. Patil",
            cause_of_death: {
                primary_cause: "Cardiac Arrest",
                secondary_cause: "Hypertension"
            },
            duration_of_illness: "2 Years"
        },

        // ================= STATISTICAL QUESTIONS =================
        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: {
                yes: true,
                no: false,
                duration_years: 20
            },
            alcohol_consumption: {
                yes: false,
                no: true,
                duration_years: 0
            },
            betel_pan_consumption: {
                yes: true,
                no: false,
                duration_years: 15
            }
        },

        // ================= INFORMANT DETAILS =================
        informant_details: {
            name: "Ramesh Korde",
            relationship_to_deceased: "Son",
            address: "H.No. 45, Main Road, Katlabodi",
            signature_present: true
        },

        // ================= REGISTRATION DETAILS =================
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

        // ================= BOTTOM REGISTRATION TABLE =================
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
    },

    {
        id: 3,
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "9933 7741 5501",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "14/03/2023",
            time_of_death: "06:20 AM",
            name_of_deceased: "Fatima Begum",
            sex: { male: false, female: true, other: false },
            age_at_death: { years: 68, months: 0, days: 0 },
            marital_status: "Widow",
            spouse_name: null
        },

        residence_details: {
            house_number: "45",
            street_area: "Old City",
            village_town: "Hyderabad",
            taluka: "Hyderabad",
            district: "Hyderabad",
            state: "Telangana"
        },

        place_of_death_details: {
            place_type: { hospital: false, home: true, other: false },
            hospital_name: null,
            address_of_place: "Old City Hyderabad"
        },

        social_details: {
            religion: { hindu: false, muslim: true, christian: false, other: false },
            occupation: "Homemaker"
        },

        medical_details: {
            medical_attention_received: false,
            type_of_medical_institution: { government: false, private: false, none: true },
            doctor_name: null,
            cause_of_death: { primary_cause: "Natural Causes", secondary_cause: null },
            duration_of_illness: null
        },

        statistical_information: {
            medically_certified: false,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: false, no: true, duration_years: 0 },
            alcohol_consumption: { yes: false, no: true, duration_years: 0 },
            betel_pan_consumption: { yes: true, no: false, duration_years: 20 }
        },

        informant_details: {
            name: "Ahmed Khan",
            relationship_to_deceased: "Neighbor",
            address: "Old City Hyderabad",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-2023-045",
            registration_date: "15/03/2023",
            registration_year: 2023,
            registration_unit_code: "HYD-02",
            local_body_name: "GHMC",
            registrar_name: "Mohammed Saleem",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "Hyderabad",
            taluka: "Hyderabad",
            village: "Hyderabad",
            registration_office_name: "GHMC Office"
        }
    },

    {
        id: 4,
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "2211 8899 6655",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "01/06/2023",
            time_of_death: "03:45 PM",
            name_of_deceased: "Joseph Fernandes",
            sex: { male: true, female: false, other: false },
            age_at_death: { years: 74, months: 0, days: 0 },
            marital_status: "Married",
            spouse_name: "Maria Fernandes"
        },

        residence_details: {
            house_number: "78",
            street_area: "Beach Road",
            village_town: "Panaji",
            taluka: "Tiswadi",
            district: "North Goa",
            state: "Goa"
        },

        place_of_death_details: {
            place_type: { hospital: true, home: false, other: false },
            hospital_name: "Goa Medical College",
            address_of_place: "Bambolim Goa"
        },

        social_details: {
            religion: { hindu: false, muslim: false, christian: true, other: false },
            occupation: "Retired Teacher"
        },

        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: { government: false, private: true, none: false },
            doctor_name: "Dr. Pinto",
            cause_of_death: { primary_cause: "Stroke", secondary_cause: "Hypertension" },
            duration_of_illness: "5 Years"
        },

        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: false, no: true, duration_years: 0 },
            alcohol_consumption: { yes: true, no: false, duration_years: 30 },
            betel_pan_consumption: { yes: false, no: true, duration_years: 0 }
        },

        informant_details: {
            name: "Peter Fernandes",
            relationship_to_deceased: "Son",
            address: "Beach Road Panaji",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-2023-088",
            registration_date: "02/06/2023",
            registration_year: 2023,
            registration_unit_code: "GOA-01",
            local_body_name: "Panaji Municipal Corporation",
            registrar_name: "Rita D’Souza",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "North Goa",
            taluka: "Tiswadi",
            village: "Panaji",
            registration_office_name: "Panaji Municipal Corporation"
        }
    },

    {
        id: 5,
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "6677 3322 9988",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "11/08/2023",
            time_of_death: "01:10 AM",
            name_of_deceased: "Ravi Prasad",
            sex: { male: true, female: false, other: false },
            age_at_death: { years: 45, months: 0, days: 0 },
            marital_status: "Married",
            spouse_name: "Lakshmi Ravi"
        },

        residence_details: {
            house_number: "9-22",
            street_area: "MG Road",
            village_town: "Vijayawada",
            taluka: "Vijayawada",
            district: "Krishna",
            state: "Andhra Pradesh"
        },

        place_of_death_details: {
            place_type: { hospital: true, home: false, other: false },
            hospital_name: "Apollo Hospital",
            address_of_place: "Vijayawada"
        },

        social_details: {
            religion: { hindu: true, muslim: false, christian: false, other: false },
            occupation: "Driver"
        },

        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: { government: false, private: true, none: false },
            doctor_name: "Dr. Srinivas",
            cause_of_death: { primary_cause: "Accident Injury", secondary_cause: null },
            duration_of_illness: null
        },

        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: true,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: true, no: false, duration_years: 15 },
            alcohol_consumption: { yes: true, no: false, duration_years: 10 },
            betel_pan_consumption: { yes: false, no: true, duration_years: 0 }
        },

        informant_details: {
            name: "Suresh Prasad",
            relationship_to_deceased: "Brother",
            address: "MG Road Vijayawada",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-2023-120",
            registration_date: "12/08/2023",
            registration_year: 2023,
            registration_unit_code: "AP-KR-01",
            local_body_name: "Vijayawada Municipal Corporation",
            registrar_name: "K. Ramesh",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "Krishna",
            taluka: "Vijayawada",
            village: "Vijayawada",
            registration_office_name: "VMC Office"
        }
    },

    {
        id: 6,
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "8899 4455 2233",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        deceased_details: {
            date_of_death: "22/10/2023",
            time_of_death: "07:30 PM",
            name_of_deceased: "Kamala Devi",
            sex: { male: false, female: true, other: false },
            age_at_death: { years: 70, months: 0, days: 0 },
            marital_status: "Widow",
            spouse_name: null
        },

        residence_details: {
            house_number: "33",
            street_area: "Temple Street",
            village_town: "Madurai",
            taluka: "Madurai",
            district: "Madurai",
            state: "Tamil Nadu"
        },

        place_of_death_details: {
            place_type: { hospital: false, home: true, other: false },
            hospital_name: null,
            address_of_place: "Temple Street Madurai"
        },

        social_details: {
            religion: { hindu: true, muslim: false, christian: false, other: false },
            occupation: "Homemaker"
        },

        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: { government: true, private: false, none: false },
            doctor_name: "Dr. Rajan",
            cause_of_death: { primary_cause: "Kidney Failure", secondary_cause: "Diabetes" },
            duration_of_illness: "4 Years"
        },

        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,
            tobacco_consumption: { yes: false, no: true, duration_years: 0 },
            alcohol_consumption: { yes: false, no: true, duration_years: 0 },
            betel_pan_consumption: { yes: true, no: false, duration_years: 30 }
        },

        informant_details: {
            name: "Lakshmi Narayanan",
            relationship_to_deceased: "Daughter",
            address: "Temple Street Madurai",
            signature_present: true
        },

        registration_details: {
            registration_number: "DR-2023-155",
            registration_date: "23/10/2023",
            registration_year: 2023,
            registration_unit_code: "TN-MD-01",
            local_body_name: "Madurai Municipal Corporation",
            registrar_name: "R. Subramanian",
            registrar_signature_present: true,
            official_seal_present: true
        },

        registration_location_details: {
            district: "Madurai",
            taluka: "Madurai",
            village: "Madurai",
            registration_office_name: "Madurai Corporation"
        }
    },
    {
        id: 7,

        // ================= HEADER =================
        document_type: "Death Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        aadhaar_number: "5566 7788 9900",
        statistical_declaration: true,
        government_seal_present: true,
        office_stamp_present: true,

        // ================= DECEASED DETAILS =================
        deceased_details: {
            date_of_death: "18/12/2023",
            time_of_death: "02:05 PM",
            name_of_deceased: "Narayan Rao",
            sex: {
                male: true,
                female: false,
                other: false
            },
            age_at_death: {
                years: 63,
                months: 0,
                days: 0
            },
            marital_status: "Married",
            spouse_name: "Savitri Rao"
        },

        // ================= RESIDENCE DETAILS =================
        residence_details: {
            house_number: "5-44",
            street_area: "Market Street",
            village_town: "Guntur",
            taluka: "Guntur",
            district: "Guntur",
            state: "Andhra Pradesh"
        },

        // ================= PLACE OF DEATH =================
        place_of_death_details: {
            place_type: {
                hospital: true,
                home: false,
                other: false
            },
            hospital_name: "Government General Hospital Guntur",
            address_of_place: "Guntur"
        },

        // ================= SOCIAL DETAILS =================
        social_details: {
            religion: {
                hindu: true,
                muslim: false,
                christian: false,
                other: false
            },
            occupation: "Farmer"
        },

        // ================= MEDICAL DETAILS =================
        medical_details: {
            medical_attention_received: true,
            type_of_medical_institution: {
                government: true,
                private: false,
                none: false
            },
            doctor_name: "Dr. K. Prasad",
            cause_of_death: {
                primary_cause: "Liver Failure",
                secondary_cause: "Alcoholic Cirrhosis"
            },
            duration_of_illness: "6 Months"
        },

        // ================= STATISTICAL INFORMATION =================
        statistical_information: {
            medically_certified: true,
            post_mortem_conducted: false,
            female_pregnant_at_time_of_death: null,

            tobacco_consumption: {
                yes: true,
                no: false,
                duration_years: 30
            },

            alcohol_consumption: {
                yes: true,
                no: false,
                duration_years: 25
            },

            betel_pan_consumption: {
                yes: false,
                no: true,
                duration_years: 0
            }
        },

        // ================= INFORMANT DETAILS =================
        informant_details: {
            name: "Ramesh Rao",
            relationship_to_deceased: "Son",
            address: "5-44 Market Street Guntur",
            signature_present: true
        },

        // ================= REGISTRATION DETAILS =================
        registration_details: {
            registration_number: "DR-2023-198",
            registration_date: "19/12/2023",
            registration_year: 2023,
            registration_unit_code: "AP-GNT-02",
            local_body_name: "Guntur Municipal Corporation",
            registrar_name: "M. Lakshmi",
            registrar_signature_present: true,
            official_seal_present: true
        },

        // ================= REGISTRATION LOCATION =================
        registration_location_details: {
            district: "Guntur",
            taluka: "Guntur",
            village: "Guntur",
            registration_office_name: "Guntur Municipal Corporation"
        }
    }

];

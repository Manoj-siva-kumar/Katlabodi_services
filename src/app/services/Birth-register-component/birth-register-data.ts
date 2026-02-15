export interface GenderSelection {
    male: boolean;
    female: boolean;
    other: boolean;
}

export interface PlaceOfBirthType {
    hospital: boolean;
    home: boolean;
    other: boolean;
}

export interface BirthType {
    single: boolean;
    twin: boolean;
    triplet: boolean;
    multiple: boolean;
}

export interface BirthTypeInformation {
    birth_type: BirthType;
    birth_order: number | null;
}

export interface ParentDetails {
    name: string | null;
    age?: string | null;
    age_at_birth?: string | null;
    education: string | null;
    occupation: string | null;
}

export interface AddressDetails {
    house_number?: string | null;
    street_area?: string | null;
    village: string;
    taluka: string;
    district: string;
    state: string;
    pin_code?: number | null;
}

export interface DeliveryInformation {
    delivery_type: {
        institutional: boolean;
        home: boolean;
        other: boolean;
    };
}

export interface InformantDetails {
    name: string | null;
    relationship_to_child: string | null;
    address: string | null;
    signature_present: boolean;
}


export interface BirthEventDetails {
    date_of_birth: string | null;
    time_of_birth: string | null;
    sex_of_child: GenderSelection;
    name_of_child: string | null;
    place_of_birth_type: PlaceOfBirthType;
    hospital_name: string | null;
    place_of_birth_address: AddressDetails;
}

export interface RegistrationDetails {
    registration_number: string | null;
    registration_date: string | null;
    registration_year: string | number | null;
    registration_unit_code?: string | null;
    local_body_name: string;
    registrar_name: string | null;
    registrar_signature_present: boolean;
    official_seal_present: boolean;
}

export interface AdditionalVisibleElements {
    checkboxes_present: boolean;
    serial_numbered_questions: boolean;
    signature_lines_present: boolean;
    official_stamp_visible: boolean;
    handwritten_entries_present: boolean;
}

export interface BirthRegistrationForm {
    id: number,
    document_type: string;
    form_number: string;
    legal_reference: string;

    birth_event_details: BirthEventDetails;
    birth_type_information: BirthTypeInformation;

    mother_details: ParentDetails;
    father_details: ParentDetails;

    permanent_address_of_parents: AddressDetails;

    delivery_information: DeliveryInformation;
    informant_details: InformantDetails;

    registration_details_office_use: RegistrationDetails;
    additional_visible_elements: AdditionalVisibleElements;
}


export const ROWDATA: BirthRegistrationForm[] = [

    {
        id: 1,

        document_type: "Birth Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",

        birth_event_details: {
            date_of_birth: "15/03/2025",
            time_of_birth: "10:45 AM",

            sex_of_child: {
                male: true,
                female: false,
                other: false
            },

            name_of_child: "Aarav Patil",

            place_of_birth_type: {
                hospital: true,
                home: false,
                other: false
            },

            hospital_name: "Rural Government Hospital, Katol",

            place_of_birth_address: {
                house_number: null,
                street_area: null,
                village: "Katlabodi",
                taluka: "Katol",
                district: "Nagpur",
                state: "Maharashtra",
                pin_code: 441302
            }
        },

        birth_type_information: {
            birth_type: {
                single: true,
                twin: false,
                triplet: false,
                multiple: false
            },
            birth_order: 1
        },

        mother_details: {
            name: "Priya Patil",
            age_at_birth: "26",
            education: "Graduate",
            occupation: "Homemaker"
        },

        father_details: {
            name: "Rahul Patil",
            age: "30",
            education: "Diploma in Engineering",
            occupation: "Private Employee"
        },

        permanent_address_of_parents: {
            house_number: "H.No. 45",
            street_area: "Main Road",
            village: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra",
            pin_code: 441302
        },

        delivery_information: {
            delivery_type: {
                institutional: true,
                home: false,
                other: false
            }
        },

        informant_details: {
            name: "Rahul Patil",
            relationship_to_child: "Father",
            address: "H.No. 45, Main Road, Katlabodi",
            signature_present: true
        },

        registration_details_office_use: {
            registration_number: "BR-2025-00123",
            registration_date: "20/03/2025",
            registration_year: 2025,
            registration_unit_code: "GP-KAT-01",
            local_body_name: "Gram Panchayat Katlabodi",
            registrar_name: "Sunita Deshmukh",
            registrar_signature_present: true,
            official_seal_present: true
        },

        additional_visible_elements: {
            checkboxes_present: true,
            serial_numbered_questions: true,
            signature_lines_present: true,
            official_stamp_visible: true,
            handwritten_entries_present: true
        }
    },
    {
        id: 2,
        document_type: "Birth Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        birth_event_details: {
            date_of_birth: "02/02/2025",
            time_of_birth: "03:20 PM",
            sex_of_child: { male: false, female: true, other: false },
            name_of_child: "Anaya Shinde",
            place_of_birth_type: { hospital: true, home: false, other: false },
            hospital_name: "Primary Health Center, Katol",
            place_of_birth_address: {
                house_number: null,
                street_area: null,
                village: "Katlabodi",
                taluka: "Katol",
                district: "Nagpur",
                state: "Maharashtra",
                pin_code: 441302
            }
        },
        birth_type_information: {
            birth_type: { single: true, twin: false, triplet: false, multiple: false },
            birth_order: 1
        },
        mother_details: {
            name: "Pooja Shinde",
            age_at_birth: "24",
            education: "12th Pass",
            occupation: "Homemaker"
        },
        father_details: {
            name: "Vikram Shinde",
            age: "29",
            education: "Graduate",
            occupation: "Farmer"
        },
        permanent_address_of_parents: {
            house_number: "H.No. 12",
            street_area: "Temple Road",
            village: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra",
            pin_code: 441302
        },
        delivery_information: {
            delivery_type: { institutional: true, home: false, other: false }
        },
        informant_details: {
            name: "Vikram Shinde",
            relationship_to_child: "Father",
            address: "H.No. 12, Temple Road, Katlabodi",
            signature_present: true
        },
        registration_details_office_use: {
            registration_number: "BR-2025-00124",
            registration_date: "05/02/2025",
            registration_year: 2025,
            registration_unit_code: "GP-KAT-01",
            local_body_name: "Gram Panchayat Katlabodi",
            registrar_name: "Sunita Deshmukh",
            registrar_signature_present: true,
            official_seal_present: true
        },
        additional_visible_elements: {
            checkboxes_present: true,
            serial_numbered_questions: true,
            signature_lines_present: true,
            official_stamp_visible: true,
            handwritten_entries_present: true
        }
    },
    {
        id: 3,
        document_type: "Birth Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        birth_event_details: {
            date_of_birth: "18/01/2025",
            time_of_birth: "09:10 AM",
            sex_of_child: { male: true, female: false, other: false },
            name_of_child: "Vivaan More",
            place_of_birth_type: { hospital: true, home: false, other: false },
            hospital_name: "District Hospital, Nagpur",
            place_of_birth_address: {
                house_number: null,
                street_area: null,
                village: "Katlabodi",
                taluka: "Katol",
                district: "Nagpur",
                state: "Maharashtra",
                pin_code: 441302
            }
        },
        birth_type_information: {
            birth_type: { single: true, twin: false, triplet: false, multiple: false },
            birth_order: 1
        },
        mother_details: {
            name: "Sneha More",
            age_at_birth: "27",
            education: "Graduate",
            occupation: "Teacher"
        },
        father_details: {
            name: "Rohit More",
            age: "32",
            education: "Post Graduate",
            occupation: "Government Employee"
        },
        permanent_address_of_parents: {
            house_number: "H.No. 34",
            street_area: "Green Park",
            village: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra",
            pin_code: 441302
        },
        delivery_information: {
            delivery_type: { institutional: true, home: false, other: false }
        },
        informant_details: {
            name: "Rohit More",
            relationship_to_child: "Father",
            address: "H.No. 34, Green Park, Katlabodi",
            signature_present: true
        },
        registration_details_office_use: {
            registration_number: "BR-2025-00125",
            registration_date: "20/01/2025",
            registration_year: 2025,
            registration_unit_code: "GP-KAT-01",
            local_body_name: "Gram Panchayat Katlabodi",
            registrar_name: "Sunita Deshmukh",
            registrar_signature_present: true,
            official_seal_present: true
        },
        additional_visible_elements: {
            checkboxes_present: true,
            serial_numbered_questions: true,
            signature_lines_present: true,
            official_stamp_visible: true,
            handwritten_entries_present: true
        }
    },
    {
        id: 4,
        document_type: "Birth Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        birth_event_details: {
            date_of_birth: "05/03/2025",
            time_of_birth: "07:35 AM",
            sex_of_child: { male: false, female: true, other: false },
            name_of_child: "Ishita Deshmukh",
            place_of_birth_type: { hospital: true, home: false, other: false },
            hospital_name: "Rural Government Hospital, Katol",
            place_of_birth_address: {
                house_number: null,
                street_area: null,
                village: "Katlabodi",
                taluka: "Katol",
                district: "Nagpur",
                state: "Maharashtra",
                pin_code: 441302
            }
        },
        birth_type_information: {
            birth_type: { single: true, twin: false, triplet: false, multiple: false },
            birth_order: 1
        },
        mother_details: {
            name: "Neha Deshmukh",
            age_at_birth: "25",
            education: "Graduate",
            occupation: "Nurse"
        },
        father_details: {
            name: "Amit Deshmukh",
            age: "31",
            education: "Graduate",
            occupation: "Shop Owner"
        },
        permanent_address_of_parents: {
            house_number: "H.No. 21",
            street_area: "Market Road",
            village: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra",
            pin_code: 441302
        },
        delivery_information: {
            delivery_type: { institutional: true, home: false, other: false }
        },
        informant_details: {
            name: "Amit Deshmukh",
            relationship_to_child: "Father",
            address: "H.No. 21, Market Road, Katlabodi",
            signature_present: true
        },
        registration_details_office_use: {
            registration_number: "BR-2025-00126",
            registration_date: "08/03/2025",
            registration_year: 2025,
            registration_unit_code: "GP-KAT-01",
            local_body_name: "Gram Panchayat Katlabodi",
            registrar_name: "Sunita Deshmukh",
            registrar_signature_present: true,
            official_seal_present: true
        },
        additional_visible_elements: {
            checkboxes_present: true,
            serial_numbered_questions: true,
            signature_lines_present: true,
            official_stamp_visible: true,
            handwritten_entries_present: true
        }
    },

    {
        id: 5,
        document_type: "Birth Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",
        birth_event_details: {
            date_of_birth: "11/01/2025",
            time_of_birth: "11:15 PM",
            sex_of_child: { male: true, female: false, other: false },
            name_of_child: "Atharv Wagh",
            place_of_birth_type: { hospital: true, home: false, other: false },
            hospital_name: "District Hospital, Nagpur",
            place_of_birth_address: {
                house_number: null,
                street_area: null,
                village: "Katlabodi",
                taluka: "Katol",
                district: "Nagpur",
                state: "Maharashtra",
                pin_code: 441302
            }
        },
        birth_type_information: {
            birth_type: { single: true, twin: false, triplet: false, multiple: false },
            birth_order: 2
        },
        mother_details: {
            name: "Sonal Wagh",
            age_at_birth: "29",
            education: "Post Graduate",
            occupation: "Bank Employee"
        },
        father_details: {
            name: "Mahesh Wagh",
            age: "34",
            education: "Graduate",
            occupation: "Business"
        },
        permanent_address_of_parents: {
            house_number: "H.No. 10",
            street_area: "Station Road",
            village: "Katlabodi",
            taluka: "Katol",
            district: "Nagpur",
            state: "Maharashtra",
            pin_code: 441302
        },
        delivery_information: {
            delivery_type: { institutional: true, home: false, other: false }
        },
        informant_details: {
            name: "Mahesh Wagh",
            relationship_to_child: "Father",
            address: "H.No. 10, Station Road, Katlabodi",
            signature_present: true
        },
        registration_details_office_use: {
            registration_number: "BR-2025-00127",
            registration_date: "14/01/2025",
            registration_year: 2025,
            registration_unit_code: "GP-KAT-01",
            local_body_name: "Gram Panchayat Katlabodi",
            registrar_name: "Sunita Deshmukh",
            registrar_signature_present: true,
            official_seal_present: true
        },
        additional_visible_elements: {
            checkboxes_present: true,
            serial_numbered_questions: true,
            signature_lines_present: true,
            official_stamp_visible: true,
            handwritten_entries_present: true
        }
    }

];

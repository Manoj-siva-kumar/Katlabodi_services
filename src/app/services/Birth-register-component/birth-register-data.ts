// ======================= INTERFACES =======================

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
    birth_order: string | number | null;
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
    pin_code?: string | number | null;
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
    gender_label: string;
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
    id: string | number;
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


// ======================= MARATHI DATA =======================

export const ROWDATA_MR: BirthRegistrationForm[] = [

    {
        id: "१",

        document_type: "जन्म नोंदणी अर्ज",
        form_number: "फॉर्म क्र. २",
        legal_reference: "जन्म व मृत्यू नोंदणी नियम",

        birth_event_details: {
            date_of_birth: "१५/०३/२०२५",
            time_of_birth: "१०:४५ AM",
            sex_of_child: { male: true, female: false, other: false },
            gender_label: "पुरुष",
            name_of_child: "आरव पाटील",

            place_of_birth_type: { hospital: true, home: false, other: false },
            hospital_name: "ग्रामीण शासकीय रुग्णालय, काटोल",

            place_of_birth_address: {
                house_number: null,
                street_area: null,
                village: "काटलबोडी",
                taluka: "काटोल",
                district: "नागपूर",
                state: "महाराष्ट्र",
                pin_code: "४४१३०२"
            }
        },

        birth_type_information: {
            birth_type: { single: true, twin: false, triplet: false, multiple: false },
            birth_order: "१"
        },

        mother_details: {
            name: "प्रिया पाटील",
            age_at_birth: "२६",
            education: "पदवीधर",
            occupation: "गृहिणी"
        },

        father_details: {
            name: "राहुल पाटील",
            age: "३०",
            education: "डिप्लोमा अभियांत्रिकी",
            occupation: "खाजगी कर्मचारी"
        },

        permanent_address_of_parents: {
            house_number: "H.No. ४५",
            street_area: "Main Road",
            village: "काटलबोडी",
            taluka: "काटोल",
            district: "नागपूर",
            state: "महाराष्ट्र",
            pin_code: "४४१३०२"
        },

        delivery_information: {
            delivery_type: { institutional: true, home: false, other: false }
        },

        informant_details: {
            name: "राहुल पाटील",
            relationship_to_child: "वडील",
            address: "H.No. ४५, Main Road, काटलबोडी",
            signature_present: true
        },

        registration_details_office_use: {
            registration_number: "BR-२०२५-००१२३",
            registration_date: "२०/०३/२०२५",
            registration_year: "२०२५",
            registration_unit_code: "GP-KAT-०१",
            local_body_name: "ग्राम पंचायत काटलबोडी",
            registrar_name: "सुनीता देशमुख",
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


// ======================= ENGLISH DATA =======================

export const ROWDATA: BirthRegistrationForm[] = [

    {
        id: 1,

        document_type: "Birth Registration Form",
        form_number: "Form No. 2",
        legal_reference: "Registration of Births & Deaths Rules",

        birth_event_details: {
            date_of_birth: "15/03/2025",
            time_of_birth: "10:45 AM",
            sex_of_child: { male: true, female: false, other: false },
            gender_label: "Male",
            name_of_child: "Aarav Patil",

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
            delivery_type: { institutional: true, home: false, other: false }
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
    }

];
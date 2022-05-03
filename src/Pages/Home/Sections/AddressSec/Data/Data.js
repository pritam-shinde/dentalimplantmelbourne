import { PinDrop, Call, AccessTime } from '@mui/icons-material';

const data = [
    {
        id: "address-1",
        hosName: "Springvale Dental Clinic",
        details: [
            {
                icon: <PinDrop />,
                text: "Shop 22, 792 Heatherton Road, Springvale South Victoria 3172 Australia",
            }, {
                icon: <Call />,
                text: "(03) 9546-0011",
            }, {
                icon: <AccessTime />,
                text: "Open Hours: 9am to 5pm - Mon - Sat.",
            }
        ],
        note: "Sunday CLOSED"
    }, {
        id: "address-2",
        hosName: "Carrum Downs Dental Clinic",
        details: [
            {
                icon: <PinDrop />,
                text: "1095 Frankston-Dandenong Rd, Carrum Downs VIC 3201",
            }, {
                icon: <Call />,
                text: "(03) 9782-1200",
            }, {
                icon: <AccessTime />,
                text: "Open Hours: 10am to 7pm - Mon - Sat.",
            }
        ],
        note: "Sunday CLOSED"
    }, {
        id: "address-3",
        hosName: "Bayswater Dentist",
        details: [
            {
                icon: <PinDrop />,
                text: "664 Mountain Hwy, Bayswater VIC 3153, Australia",
            }, {
                icon: <Call />,
                text: "(03) 9069 3100",
            }, {
                icon: <AccessTime />,
                text: "Open Hours: 9am to 6pm - Mon - Sat.",
            }
        ],
        note: "9am to 4pm - Sunday (Sunday by appointments only)"
    }
];

export default data;
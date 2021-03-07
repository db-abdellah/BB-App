export interface Character {
    char_id: number,
    name:string,
    birthday:string,
    occupation: string[],
    img: string,
    status: string,
    appearance: number[],
    nickname: string,
    portrayed: string, 
    category: string,
    better_call_saul_appearance: number[]
}

export const Characters:Character[]=[
    {
        "char_id": 1,
        "name": "Walter White",
        "birthday": "09-07-1958",
        "occupation": [
            "High School Chemistry Teacher",
            "Meth King Pin"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Presumed dead",
        "nickname": "Heisenberg",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Bryan Cranston",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 2,
        "name": "Jesse Pinkman",
        "birthday": "09-24-1984",
        "occupation": [
            "Meth Dealer"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Cap n' Cook",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Aaron Paul",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 3,
        "name": "Skyler White",
        "birthday": "08-11-1970",
        "occupation": [
            "House wife",
            "Book Keeper",
            "Car Wash Manager",
            "Taxi Dispatcher"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Sky",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Anna Gunn",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 4,
        "name": "Walter White Jr.",
        "birthday": "07-08-1993",
        "occupation": [
            "Teenager"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Flynn",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "RJ Mitte",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 5,
        "name": "Henry Schrader",
        "birthday": "Unknown",
        "occupation": [
            "DEA Agent"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Hank",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Dean Norris",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 6,
        "name": "Marie Schrader",
        "birthday": "Unknown",
        "occupation": [
            "Housewife",
            "Clepto"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Marie",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Betsy Brandt",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 7,
        "name": "Mike Ehrmantraut",
        "birthday": "Unknown",
        "occupation": [
            "Hitman",
            "Private Investigator",
            "Ex-Cop"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Mike",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Jonathan Banks",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "char_id": 8,
        "name": "Saul Goodman",
        "birthday": "Unknown",
        "occupation": [
            "Lawyer"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Jimmy McGill",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Bob Odenkirk",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "char_id": 9,
        "name": "Gustavo Fring",
        "birthday": "Unknown",
        "occupation": [
            "Los-Pollos co-Founder",
            "Philanthropist",
            "Cartel Leader"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Gus",
        "appearance": [
            2,
            3,
            4
        ],
        "portrayed": "Giancarlo Esposito",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            3,
            4,
            5
        ]
    },
    {
        "char_id": 10,
        "name": "Hector Salamanca",
        "birthday": "Unknown",
        "occupation": [
            "Former Senior Cartel Leader"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Don Hector",
        "appearance": [
            1,
            2,
            3,
            4
        ],
        "portrayed": "Mark Margolis",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            2,
            3,
            4,
            5
        ]
    },
    {
        "char_id": 11,
        "name": "Domingo Molina",
        "birthday": "Unknown",
        "occupation": [
            "Meth Distributor"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Krazy-8",
        "appearance": [
            1
        ],
        "portrayed": "Maximino Arciniega",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 12,
        "name": "Tuco Salamanca",
        "birthday": "Unknown",
        "occupation": [
            "Meth Distributor"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Tuco",
        "appearance": [
            1,
            2
        ],
        "portrayed": "Raymond Cruz",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2
        ]
    },
    {
        "char_id": 13,
        "name": "Marco & Leonel Salamanca",
        "birthday": "Unknown",
        "occupation": [
            "Cartel Hitman"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "The Cousins",
        "appearance": [
            3
        ],
        "portrayed": "Luis & Daniel Moncada",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 14,
        "name": "Lydia Rodarte-Quayle",
        "birthday": "Unknown",
        "occupation": [
            "Executive at Madrigal"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Lydia",
        "appearance": [
            5
        ],
        "portrayed": "Laura Fraser",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 15,
        "name": "Todd Alquist",
        "birthday": "Unknown",
        "occupation": [
            "Lab Assistant",
            "Enforcer",
            "Meth Cook"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Ricky Hitler",
        "appearance": [
            5
        ],
        "portrayed": "Jesse Plemons",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 16,
        "name": "Jane Margolis",
        "birthday": "Unknown",
        "occupation": [
            "Tattoo Artist",
            "Landlord"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Apology Girl",
        "appearance": [
            2
        ],
        "portrayed": "Krysten Ritter",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 17,
        "name": "Skinny Pete",
        "birthday": "Unknown",
        "occupation": [
            "Low-level meth distributer"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Skinny",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Charles Baker",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 18,
        "name": "Brandon Mayhew",
        "birthday": "Unknown",
        "occupation": [
            "Low-level meth distributer"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Badger",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Matt L. Jones",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 19,
        "name": "Huell Babineaux",
        "birthday": "Unknown",
        "occupation": [
            "Bodyguard"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Huell",
        "appearance": [
            4,
            5
        ],
        "portrayed": "Lavell Crawford",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 20,
        "name": "Steven Gomez",
        "birthday": "Unknown",
        "occupation": [
            "DEA Agent"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Gomie",
        "appearance": [
            1,
            2,
            3,
            4,
            5
        ],
        "portrayed": "Steven Michael Quezada",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 21,
        "name": "Theodore Beneke",
        "birthday": "Unknown",
        "occupation": [
            "Former President Beneke Fabricators"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Ted",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Christopher Cousins",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 22,
        "name": "Gale Boetticher",
        "birthday": "Unknown",
        "occupation": [
            "Chemist",
            "Meth manufacturer"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "GB",
        "appearance": [
            3
        ],
        "portrayed": "David Costabile",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 23,
        "name": "Andrea Cantillo",
        "birthday": "Unknown",
        "occupation": [
            "Unknown"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Andrea",
        "appearance": [
            3,
            4,
            5
        ],
        "portrayed": "Emily Rios",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 24,
        "name": "Brock Cantillo",
        "birthday": "Unknown",
        "occupation": [
            "Kid"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Brock",
        "appearance": [
            3,
            4,
            5
        ],
        "portrayed": "Ian Posada",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 25,
        "name": "Carmen Molina",
        "birthday": "Unknown",
        "occupation": [
            "High School Principal"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Carmen",
        "appearance": [
            1,
            2,
            3,
            5
        ],
        "portrayed": "Carmen Serano",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 26,
        "name": "Gretchen Schwartz",
        "birthday": "Unknown",
        "occupation": [
            "Co-owner Gray Matter"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Gretchen",
        "appearance": [
            1,
            2,
            5
        ],
        "portrayed": "Jessica Hecht",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 27,
        "name": "Elliot Schwartz",
        "birthday": "Unknown",
        "occupation": [
            "Co-Founder Gray Matter"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Elliot",
        "appearance": [
            1,
            5
        ],
        "portrayed": "Adam Godley",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 28,
        "name": "Gonzo",
        "birthday": "Unknown",
        "occupation": [
            "Tuco's Bodyguard"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Gonzo",
        "appearance": [
            1,
            2
        ],
        "portrayed": "Jesus, Payan, Jr.",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 29,
        "name": "Christian Ortgea",
        "birthday": "Unknown",
        "occupation": [
            "Low-level meth distributor"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Combo",
        "appearance": [
            1,
            2,
            3
        ],
        "portrayed": "Rodney Rush",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 30,
        "name": "Mrs. Pinkman",
        "birthday": "Unknown",
        "occupation": [
            "unknown"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Jesse's mom",
        "appearance": [
            1,
            2,
            3
        ],
        "portrayed": "Tess Harper",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 31,
        "name": "Adam Pinkman",
        "birthday": "Unknown",
        "occupation": [
            "unknown"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Jesse's dad",
        "appearance": [
            1,
            2,
            3
        ],
        "portrayed": "Michael Bofshever",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 32,
        "name": "Jake Pinkman",
        "birthday": "Unknown",
        "occupation": [
            "Kid",
            "Jesse's little brother"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Jake",
        "appearance": [
            1
        ],
        "portrayed": "Ben Petry",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 33,
        "name": "No-Doze",
        "birthday": "Unknown",
        "occupation": [
            "Juarez Cartel Lieutenant"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "No-Doze",
        "appearance": [
            1,
            2
        ],
        "portrayed": "Cesar Garcia",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 34,
        "name": "Emilio Koyama",
        "birthday": "Unknown",
        "occupation": [
            "Low-level meth distributor"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Emilio",
        "appearance": [
            1
        ],
        "portrayed": "John Koyama",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 35,
        "name": "Dr. Delcavoli",
        "birthday": "Unknown",
        "occupation": [
            "Physician"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Dr. Delcavoli",
        "appearance": [
            1,
            2
        ],
        "portrayed": "David House",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 36,
        "name": "Wendy S.",
        "birthday": "Unknown",
        "occupation": [
            "Prostitute"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Wendy",
        "appearance": [
            1,
            2,
            3
        ],
        "portrayed": "Julie Minesci",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 37,
        "name": "Bogdan Wolynetz",
        "birthday": "Unknown",
        "occupation": [
            "Former owner of A1A Car Wash"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Bogdan",
        "appearance": [
            1,
            3,
            4
        ],
        "portrayed": "Marius Stan",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 38,
        "name": "Ken",
        "birthday": "Unknown",
        "occupation": [
            "Stock Broker"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Ken Wins",
        "appearance": [
            1
        ],
        "portrayed": "Kyle Bornheimer",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 39,
        "name": "Holly White",
        "birthday": "Unknown",
        "occupation": [
            "Infant"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Holly",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Unknown",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 40,
        "name": "George Merkert",
        "birthday": "Unknown",
        "occupation": [
            "Former Head of Albuquerque DEA"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "ASAC Merkert",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Michael Shamus Wiles",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 41,
        "name": "Donald Margolis",
        "birthday": "Unknown",
        "occupation": [
            "Air-Traffic Controller",
            "Landlord"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Unknown",
        "nickname": "Jane's dad",
        "appearance": [
            2,
            3
        ],
        "portrayed": "John de Lancie",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 42,
        "name": "Clovis",
        "birthday": "Unknown",
        "occupation": [
            "Mechanic"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Clovis",
        "appearance": [
            2,
            3
        ],
        "portrayed": "Tom Kiesche",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 43,
        "name": "SAC Ramey",
        "birthday": "Unknown",
        "occupation": [
            "DEA agent"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "SAC Ramey",
        "appearance": [
            2,
            4,
            5
        ],
        "portrayed": "Todd Terry",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 44,
        "name": "Victor",
        "birthday": "Unknown",
        "occupation": [
            "Henchman of Gustavo Fring"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Victor",
        "appearance": [
            2,
            3,
            4
        ],
        "portrayed": "Jeremiah Bitsui",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 45,
        "name": "Tomás Cantillo",
        "birthday": "Unknown",
        "occupation": [
            "Kid",
            "Gang member for a rival dealer in ABQ"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Andrea's brother",
        "appearance": [
            2,
            3
        ],
        "portrayed": "Angelo Martinez",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 46,
        "name": "Francesca Liddy",
        "birthday": "Unknown",
        "occupation": [
            "Department of Motor Vehicles",
            "Secretary for Saul Goodman Associates"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Honey Tits",
        "appearance": [
            2,
            3,
            4,
            5
        ],
        "portrayed": "Tina Parker",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            3,
            4
        ]
    },
    {
        "char_id": 47,
        "name": "Cynthia",
        "birthday": "Unknown",
        "occupation": [
            "Los Pollos Hermanos Manager"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Cynthia",
        "appearance": [
            2,
            3,
            4
        ],
        "portrayed": "Ashley Kajiki",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 48,
        "name": "Tortuga",
        "birthday": "Unknown",
        "occupation": [
            "Juarez Cartel member",
            "DEA informant"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Tortuga",
        "appearance": [
            2,
            3
        ],
        "portrayed": "Danny Trejo",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 49,
        "name": "Tim Roberts",
        "birthday": "Unknown",
        "occupation": [
            "Detective for the APD"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Detective Roberts",
        "appearance": [
            2,
            4
        ],
        "portrayed": "Nigel Gibbs",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 50,
        "name": "Juan Bolsa",
        "birthday": "Unknown",
        "occupation": [
            "Mexican drug cartel boss"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Don Juan",
        "appearance": [
            3,
            4
        ],
        "portrayed": "Javier Grajeda",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 51,
        "name": "Group Leader",
        "birthday": "Unknown",
        "occupation": [
            "Drug & Alcohol Rehabilitation Counselor"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Counselor",
        "appearance": [
            3,
            4
        ],
        "portrayed": "Jere Burns",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 52,
        "name": "Kaylee Ehrmantraut",
        "birthday": "Unknown",
        "occupation": [
            "Kid"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Mike's Granddaughter",
        "appearance": [
            3,
            5
        ],
        "portrayed": "Kaija Rose Bales",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 53,
        "name": "Pamela",
        "birthday": "Unknown",
        "occupation": [
            "Attorney"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Skyler's attorney",
        "appearance": [
            3
        ],
        "portrayed": "Julie Dretzin",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 54,
        "name": "Duane Chow",
        "birthday": "Unknown",
        "occupation": [
            "Owner of Golden Moth Chemical"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Chow",
        "appearance": [
            3,
            5
        ],
        "portrayed": "James Ning",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 55,
        "name": "Stacey Ehrmantraut",
        "birthday": "Unknown",
        "occupation": [
            "Mother"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Mike's daugter-in-law",
        "appearance": [
            3
        ],
        "portrayed": "Kerry Condon",
        "category": "Breaking Bad, Better Call Saul",
        "better_call_saul_appearance": [
            1,
            2,
            3,
            4,
            5
        ]
    },
    {
        "char_id": 56,
        "name": "Officer Saxton",
        "birthday": "Unknown",
        "occupation": [
            "APD Officer"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Alive",
        "nickname": "Saxton",
        "appearance": [
            3
        ],
        "portrayed": "Stoney Westmoreland",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    },
    {
        "char_id": 57,
        "name": "Jack Welker",
        "birthday": "Unknown",
        "occupation": [
            "Criminal Gang Leader"
        ],
        "img": "assets/walter-white.jpg",
        "status": "Deceased",
        "nickname": "Uncle Jack",
        "appearance": [
            5
        ],
        "portrayed": "Michael Bowen",
        "category": "Breaking Bad",
        "better_call_saul_appearance": []
    }
]
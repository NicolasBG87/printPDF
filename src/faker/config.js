// Let's assume that this config came from the client
const config = [{
    type: 'header',
    fixed: false, // will be shown on every page if true
    components: [{
        type: 'image',
        data: 'https://cdn.totalgym.rs/wp-content/uploads/2020/04/black-background-logo-300.png',
    }, {
        type: 'text',
        data: 'Club - Location: CI Test Club - Little rock'
    }, {
        type: 'text',
        data: 'Phone: (501) 515-5001',
        link: true, // links are clickable and can open pages, use email provider, make calls... etc
    }]
}, {
    type: 'text',
    data: 'DIESEL LAMAR',
}, {
    type: 'text',
    data: 'AR'
}, {
    type: 'text',
    data: 'Agreement Number: 0962600076'
}, {
    type: 'title',
    data: 'My Check-In History',
    caption: '03/11/2022 to 05/10/2022'
}, {
    type: 'table',
    url: '/src/faker/data.json', // this should be the url to fetch data from our server
    // columns are optional, if not provided, table will generate columns based on object props from data
    // can be expanded to take object with configuration such as width, flex, style... etc
    columns: {
        date: 'Date',
        time: 'Time',
        location: 'Location',
        homeClub: 'Home Club'
    }
}, {
    type: 'footer',
    fixed: true,
    pagination: true,
    components: [{
        type: 'image',
        data: 'http://www.theenergyclub.com/wp-content/uploads/2021/01/trainerize.png',
    }, {
        type: 'text',
        data: 'Super awesome company © 2022'
    }]
}];

module.exports = { config };

const backup_names = [
    '2021-04-24T01:00:00.zip',
    '2021-05-24T01:00:00.zip',
    '2021-06-24T01:00:00.zip',
    '2021-07-24T01:00:00.zip',
    '2021-08-24T01:00:00.zip',
    '2021-09-24T01:00:00.zip',
    '2021-10-24T01:00:00.zip',
    '2021-11-24T01:00:00.zip',
    '2021-12-24T01:00:00.zip',
    '2022-01-02T01:00:00.zip',
    '2022-05-05T01:00:00.zip',
    '2022-05-10T01:00:00.zip',
    '2022-05-30T01:00:00.zip',
    '2022-06-01T01:00:00.zip',
    '2022-06-10T01:00:00.zip',
    '2022-06-20T01:00:00.zip',
    '2022-06-30T01:00:00.zip',
    '2022-07-02T01:00:00.zip',
    '2022-07-10T01:00:00.zip',
    '2022-07-20T01:00:00.zip',
    '2022-07-31T01:00:00.zip',
    '2022-08-01T01:00:00.zip',
    '2022-08-02T01:00:00.zip',
    '2022-08-03T01:00:00.zip',
    '2022-08-03T11:00:00.zip',
    '2022-08-04T01:00:00.zip',
    '2022-08-05T01:00:00.zip',
    '2022-08-06T01:00:00.zip',
    '2022-08-07T01:00:00.zip',
    '2022-08-08T01:00:00.zip',
    '2022-08-08T18:00:00.zip',
    '2022-08-09T01:00:00.zip',
    '2022-08-10T01:00:00.zip',
    '2022-08-11T01:00:00.zip',

    '2022-08-12T01:00:00.zip',
    '2022-08-13T01:00:00.zip',
    '2022-08-14T01:00:00.zip',
    '2022-08-15T01:00:00.zip',
    '2022-08-15T09:23:00.zip',
    '2022-08-15T09:55:00.zip',
    '2022-08-15T16:10:00.zip',
    '2022-08-16T01:00:00.zip',
    '2022-08-17T01:00:00.zip',
    '2022-08-18T01:00:00.zip',
    '2022-08-18T12:00:00.zip',
]

// Start of Code
const testData = [
    '2021-04-24T01:00:00.zip',
    '2021-05-24T01:00:00.zip',
    '2021-06-24T01:00:00.zip',
    '2021-07-24T01:00:00.zip',
    '2021-08-24T01:00:00.zip',
    '2021-09-24T01:00:00.zip',
    '2021-10-24T01:00:00.zip',
    '2021-11-24T01:00:00.zip',
    '2021-12-24T01:00:00.zip',
    '2022-01-02T01:00:00.zip',
    '2022-05-05T01:00:00.zip',
    '2022-05-10T01:00:00.zip',
    '2022-05-30T01:00:00.zip',
    '2022-06-01T01:00:00.zip',
    '2022-06-10T01:00:00.zip',
    '2022-06-20T01:00:00.zip',
    '2022-06-30T01:00:00.zip',
    '2022-07-02T01:00:00.zip',
    '2022-07-10T01:00:00.zip',
    '2022-07-20T01:00:00.zip',
    '2022-07-31T01:00:00.zip',
    '2022-08-01T01:00:00.zip',
    '2022-08-02T01:00:00.zip',
    '2022-08-03T01:00:00.zip',
    '2022-08-03T11:00:00.zip',
    '2022-08-04T01:00:00.zip',
    '2022-08-05T01:00:00.zip',
    '2022-08-06T01:00:00.zip',
    '2022-08-07T01:00:00.zip',
    '2022-08-08T01:00:00.zip',
    '2022-08-08T18:00:00.zip',
    '2022-08-09T01:00:00.zip',
    '2022-08-10T01:00:00.zip',
    '2022-08-11T01:00:00.zip',
    '2022-08-12T01:00:00.zip',
    '2022-08-13T01:00:00.zip',
    '2022-08-14T01:00:00.zip',
    '2022-08-15T01:00:00.zip',
    '2022-08-15T09:23:00.zip',
    '2022-08-15T09:55:00.zip',
    '2022-08-15T16:10:00.zip',
    '2022-08-16T01:00:00.zip',
    '2022-08-17T01:00:00.zip',
    '2022-08-18T01:00:00.zip',
    '2022-08-18T12:00:00.zip',
    // Added this data to test for 2023
    '2023-05-18T08:00:00.zip',
    '2023-06-18T01:00:00.zip',
    '2023-06-18T02:00:00.zip',
    '2023-06-18T13:00:00.zip', // -> Should not be deleted
    '2023-07-18T12:00:00.zip',
    '2023-07-18T08:00:00.zip',
    '2023-07-18T01:00:00.zip',
    '2023-07-18T13:00:00.zip', // -> Should not be deleted
]

// Set data either to testData or backup_names
const data = testData

const month = parseInt(new Date().getMonth()) + 1
const year = parseInt(new Date().getFullYear())

// Strips Date of.zip and turns it into ISOString
const returnDateOnly = (backUp) => {
    return new Date(backUp.split(".zip")[0] + ".00Z").toISOString()
}

// Sort array by date
const sortedArray = data.sort(function (a, b) {
    const dateA = returnDateOnly(a)
    const dateB = returnDateOnly(b)
    return new Date(dateA) - new Date(dateB)
}
)

// Delete Backups Older than 12 Month
const oneYearAgo = () => {
    const lastYear = parseInt(new Date().getFullYear()) - 1
    const lastYearMonth = parseInt(new Date().getMonth()) - 11
    const lastYearDay = parseInt(new Date().getDate())
    return [lastYear, lastYearMonth < 1 ? lastYearMonth + 12 : lastYearMonth, lastYearDay]
}

const filterOlderThan12Month = () => {
    return sortedArray.filter(x => {
        var dateYear = parseInt(returnDateOnly(x).split('-')[0])
        var dateMonth = parseInt(returnDateOnly(x).split('-')[1])
        var dateDay = parseInt(returnDateOnly(x).split('-')[2].split("T")[0])

        return (oneYearAgo()[0] > dateYear) || (oneYearAgo()[0] >= dateYear && oneYearAgo()[1] >= dateMonth && (oneYearAgo()[1] != dateMonth ? dateDay : oneYearAgo()[2] > dateDay))
    })
}



// Delete all Backups for each Month, except the first one of the month
const filter12Month = () => {
    const filterYoungerThan12Month = sortedArray.filter(x => {
        var dateYear = parseInt(returnDateOnly(x).split('-')[0])
        var dateMonth = parseInt(returnDateOnly(x).split('-')[1])
        var dateDay = parseInt(returnDateOnly(x).split('-')[2].split("T")[0])
        return (oneYearAgo()[0] === dateYear - 1 && oneYearAgo()[1] != dateMonth) || (oneYearAgo()[0] <= dateYear) && (oneYearAgo()[1] <= dateMonth) && (oneYearAgo()[1] != dateMonth ? dateDay : oneYearAgo()[2] <= dateDay)
    })


    // Group dates by month, so that a filter can work on each month
    const groupedArray = Object.values(filterYoungerThan12Month.reduce((x, date) => {
        const [year, month] = date.split('-');

        const keys = `${year}_${month}`;
        x[keys] = x[keys] || { month: [] };
        x[keys].month.push(date)

        return x;
    
    }, {}));

    // Filter each month seperatly, use flatMap instead of map to flatten Array
    const filterLastOne = groupedArray.flatMap((x) =>
        x.month.filter((d, i) => {
            return i != 0 // # This is used to filter the first one of the month
            // return  i != x.month.length -1  # This is used to filter the last one of the month
        })
    )
    return filterLastOne
}

// Delete all Backups except the last one for each day of the current month
const filter30firstDays = () => {
    const onlyCurrentMonth = sortedArray.filter((x) => {
        var dateYear = returnDateOnly(x).split('-')[0]
        var dateMonth = returnDateOnly(x).split('-')[1]
        return (month == dateMonth) && (year == dateYear)
    }
    )
    return onlyCurrentMonth.filter((x, i) => {
        return i != onlyCurrentMonth.length - 1
    })
}


const deleteBackup = (backupArray, name) => {
    console.log("Deleting: " + name)
    console.log(backupArray)
    // Code to delete Backup
}


// The ones beeing printed will be deleted
deleteBackup(filterOlderThan12Month(), "Deleting all that are older than 12 month")
deleteBackup(filter12Month(), "Deleting all but the first one of each month for the last 12 months")
deleteBackup(filter30firstDays(), "Deleting all but the last one of curent month")

// --> Here you could also use Cron Job to schedule funtions to run daily


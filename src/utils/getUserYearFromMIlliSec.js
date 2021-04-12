const getUserYearFromMilliSec = unixTimestamp  => {  
    const data = new Date(unixTimestamp * 1000).getFullYear();
    const currentYear = new Date().getFullYear();

    return currentYear - data;
}

export default getUserYearFromMilliSec;
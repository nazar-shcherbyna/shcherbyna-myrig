const convertPoundsToKilogram = pounds => {
    let weightInKilogram = (pounds * 0.453592).toFixed();
    return weightInKilogram;
}

export default convertPoundsToKilogram;
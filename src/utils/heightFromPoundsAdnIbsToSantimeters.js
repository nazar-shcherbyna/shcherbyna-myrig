const heightFromPoundsAdnIbsToSantimeters = height => {
    const heightInPoundsAndIbs = height.split("'");
    const heightInIbs = heightInPoundsAndIbs[1].split('"');
    const heightInSantimeters = heightInPoundsAndIbs[0] * 30.48 + heightInIbs[0] * 2.54;
    return heightInSantimeters.toFixed();
}
export default heightFromPoundsAdnIbsToSantimeters
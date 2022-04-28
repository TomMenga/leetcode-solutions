class Test {

    canConstruct(ransomNote, magazine) {
        const groupedMagazine = this.groupByChar(magazine);
        const groupedRansomNote = this.groupByChar(ransomNote);

        return Object.keys(groupedRansomNote).reduce((res, c) => 
            res && groupedRansomNote[c] <= groupedMagazine[c]
        , true);
    }

    groupByChar(str) {
        return str.split('').reduce((res, c) => {
            res[c] = res[c] ? ++res[c] : 1;
            return res;
        }, {});
    }
}

const testExecutor = new Test();

const testCase = [
    {ransom: 'aabb', magazine: 'aaaabbbb', result: true},
    {ransom: 'aabb', magazine: 'ab', result: false},
    {ransom: 'aabb', magazine: 'aabb', result: true},
    {ransom: 'abc', magazine: 'abd', result: false},
];

testCase.forEach(testCase => {
    console.log('Executing test', testCase);
    console.assert(testExecutor.canConstruct(testCase.ransom, testCase.magazine) === testCase.result)
})

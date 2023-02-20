const averageExams = (valueExam) => {
    const numberValidation = valueExam.every(exam => typeof exam === 'number');
    if(!numberValidation)throw Error('please input number')

    const sumValue = valueExam.reduce((accum, curr) => {
        return accum + curr
    })

    return sumValue / valueExam.length
};

const isStudentPassExam = (valueExam, name) => {
    const minValueExam = 75;

    const average = averageExams(valueExam);

    if(average > minValueExam){
        console.log(`${name} pass the exam`);
        return true
    } else {
        console.log(`${name} fail the exam`);
        return false
    }
}

module.exports = { averageExams, isStudentPassExam };
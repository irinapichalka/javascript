const getDiff = (startDate, endDate) => {
    let newStartDate =  Date.parse(startDate);
    let newEndDate =  Date.parse(endDate);
    
    if(startDate > endDate){
        newStartDate =  Date.parse(endDate);
        newEndDate =  Date.parse(startDate);
    }
    
    const t = newEndDate - newStartDate;
    const years = Math.floor(t / (1000 * 60 * 60 * 24 * 30 * 12));
    const months = Math.floor(t / (1000 * 60 * 60 * 24 * 30) % 12)
    const days = Math.floor(t / (1000 * 60 * 60 * 24) % 30);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((t / (1000 * 60)) % 60);
    const seconds = Math.floor((t / 1000) % 60);
    return `${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`;
}
const today = new Date();
console.log(today);

const birthday = new Date('December 17, 1995 03:24:00');
console.log(birthday);

console.log(getDiff(today, birthday));


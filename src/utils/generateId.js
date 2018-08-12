let currentId = 0;
export default function(prefix='id') {
    currentId++;
    return `${prefix}${currentId}`;
}
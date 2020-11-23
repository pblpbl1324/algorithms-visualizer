//a merge sort algorithm I wrote to demonstrate its capability for the visualizer.
export function mergeSort(array, anim, l, r) {
    //base case: the segment is length 1
    if(l == r) return;
    var mid = Math.floor((l+r)/2);
    //otherwise, sort the left and right segments
    mergeSort(array, anim, l, mid); mergeSort(array, anim, mid+1, r);
    //combine sorted segments
    const lft = [], rit = []; 
    for (let i = l; i <= mid; i++) lft.push(array[i]); lft.push(Number.MAX_SAFE_INTEGER);
    for (let i = mid + 1; i <= r; i++) rit.push(array[i]); rit.push(Number.MAX_SAFE_INTEGER);
    for (let i = l, x=0, y=0; i <= r; i++)
    {
        //push animations for updating the left and right bar colour, if they exist
        var leftAnim = x == lft.length-1 ? -1 : l+x;
        var rightAnim = y == rit.length-1 ? -1 : mid+1+y;
        anim.push([leftAnim, rightAnim, 1]); 
        if (lft[x] <= rit[y]) 
        {
            anim.push([i, lft[x], 2]);
            array[i] = lft[x++];
        }
        else 
        {
            anim.push([i, rit[y], 2]);
            array[i] = rit[y++];
        }
        anim.push([leftAnim, rightAnim, 0]);
    }
}
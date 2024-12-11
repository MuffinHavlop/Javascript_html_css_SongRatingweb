let BUMPING = 0;
let MID = 0;
let choice = "";

function bumpingCount(choice){
    if (choice == 'BUMPING'){
        BUMPING += 1;
    }
    else if (choice == 'MID'){
        MID += 1;
    }
    console.log(`BUMPINGS: ${BUMPING}`);
    console.log(`MIDS: ${MID}`);
    return BUMPING, MID;
}


let dictionary: Record<string, TrackStates> = {};

interface TrackStates {
    current: string;
    next: string;
}

const item: Record<keyof TrackStates, string> = {
    current: 'js02js9',
    next: '8nlksjsk'
};

// Numbers are coerced to a string -- same as dictionary['0']
dictionary[0] = item;

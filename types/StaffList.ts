export interface StaffList {
    seniorManagement: Staff[];
    juniorManagement: Staff[];
}

export interface Staff {
    name:     string;
    role:     string;
    desc:     string;
    ifcName:  string;
    location: string;
    social?:   Social;
    id?:       string;
}

interface Social {
    yt?:     string;
    github?: string;
    ig?:     string;
}

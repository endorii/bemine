"use client";

import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { SearchIcon } from "lucide-react";
import { useState } from "react";
import { USA_STATES } from "../../data/USA_STATES";
import { WrapperContainer } from "../../wrappers";

export function SearchInput() {
    const [input, setInput] = useState<string>("");
    const [selectedState, setSelectedState] = useState<string>("");
    const [selectedCity, setSelectedCity] = useState<string>("");

    return (
        <WrapperContainer className="px-20 py-7 bg-blue-600/20">
            <div className="relative flex items-center w-full">
                <input
                    type="text"
                    placeholder="Search of any product or brand..."
                    className="px-7 py-4 rounded-l-3xl outline-0 w-full bg-white transition-colors"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                />

                <div className="flex gap-1 bg-white rounded-r-3xl">
                    <Select
                        onValueChange={(value) => {
                            setSelectedState(value);
                            setSelectedCity("");
                        }}
                    >
                        <SelectTrigger className="w-[100px] bg-white h-full! border-0 rounded-none py-4.5 shadow-none outline-0!">
                            <SelectValue placeholder="State" />
                        </SelectTrigger>

                        <SelectContent
                            position="popper"
                            side="bottom"
                            sideOffset={4}
                            className="max-h-[300px] overflow-y-auto"
                        >
                            <SelectGroup>
                                <SelectLabel>State</SelectLabel>

                                {Object.keys(USA_STATES).map((state) => (
                                    <SelectItem key={state} value={state}>
                                        {state}
                                    </SelectItem>
                                ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Select
                        onValueChange={(value) => {
                            setSelectedCity(value);
                        }}
                        disabled={!selectedState}
                    >
                        <SelectTrigger className="w-[200px] bg-white h-full! border-0 rounded-none py-4.5 shadow-none">
                            <SelectValue placeholder="Select a city" />
                        </SelectTrigger>

                        <SelectContent
                            position="popper"
                            side="bottom"
                            sideOffset={4}
                            className="max-h-[300px] overflow-y-auto"
                        >
                            <SelectGroup>
                                <SelectLabel>City</SelectLabel>

                                {selectedState &&
                                    USA_STATES[selectedState].map((city) => (
                                        <SelectItem key={city} value={city}>
                                            {city}
                                        </SelectItem>
                                    ))}
                            </SelectGroup>
                        </SelectContent>
                    </Select>

                    <button
                        className="flex items-center justify-center gap-2 px-4 py-3.5 font-medium rounded-r-3xl text-white hover:text-white bg-blue-600 hover:bg-blue-700 transition"
                        onClick={() => {
                            console.log(
                                "Filter by:",
                                selectedState,
                                selectedCity
                            );
                        }}
                    >
                        <SearchIcon />
                        <div>Search</div>
                    </button>
                </div>
            </div>
        </WrapperContainer>
    );
}

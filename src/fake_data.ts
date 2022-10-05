import { SourceFlowersStatus } from "@script_types/sources/flowers/source_flowers_status";

export const getFlowers = (): SourceFlowersStatus.Flower[] => {
    const time_data = Date.now();
    return [
        {
            ident: "test1",
            name: "Tomate 1",
            soil_moisture: 40,
            time_data
        },
        {
            ident: "test2",
            name: "Banana",
            soil_moisture: 23,
            time_data
        },
        {
            ident: "test3",
            name: "Dracaena Draco",
            soil_moisture: 10,
            time_data
        },
        {
            ident: "test5",
            name: "Dracaena Trifascita",
            soil_moisture: 10,
            time_data
        },
        {
            ident: "test4",
            name: "Dracaena Fragrans",
            soil_moisture: 10,
            time_data
        }
    ]
}
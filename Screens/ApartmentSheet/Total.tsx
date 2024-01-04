import React from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native';
import { z, ZodError } from 'zod'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { Button } from './CVAcomponent/button';
import Dialog from './CVAcomponent/Dialog';


const priceCalculatorSchema = z.object({
  land_price: z.string(),
  building_price: z.string(),
  sub_total: z.string(),
  corner_charege: z.string(),
  facing_charge: z.string(),
  remoteness_charge: z.string(),
  project_management: z.string(),
  project_adjustment: z.string(),
  floor_charges: z.string(),
  unit_charges: z.string(),
  grand_total: z.string(),
})

 function Total() {
  const navigation = useNavigation();
  const route = useRoute();
  const projectData = route.params?.projectData;
  const branchData = route.params?.branchData;
  const modelData = route.params?.modelData;
  const companyData = route.params?.companyData;
  const unitData = route.params?.unitData;

  // console.log("companyData", modelData);

  const [totalData, setTotalData] = React.useState({
    land_price: "",
    building_price: "",
    sub_total: "",
    corner_charege: "",
    facing_charge: "",
    remoteness_charge: "",
    project_management: "",
    project_adjustment: "",
    floor_charges: "",
    unit_charges: "",
    grand_total: "",
  });

  const [formErrors, setFormErrors] = React.useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = React.useState<string | null>(null);

  const calculatePrice = (data: {
    land_price: string,
    building_price: string,
    sub_total: string,
    corner_charege: string,
    facing_charge: string,
    remoteness_charge: string,
    project_management: string,
    project_adjustment: string,
    floor_charges: string,
    unit_charges: string,
    grand_total: string,
  }): number => {

    const land_price = parseFloat(data.land_price);
    const building_price = parseFloat(data.building_price);
    const sub_total = parseFloat(data.sub_total);
    const corner_charege = parseFloat(data.corner_charege);
    const facing_charge = parseFloat(data.facing_charge);
    const remoteness_charge = parseFloat(data.remoteness_charge);
    const project_management = parseFloat(data.project_management);
    const project_adjustment = parseFloat(data.project_adjustment);
    const floor_charges = parseFloat(data.floor_charges);
    const unit_charges = parseFloat(data.unit_charges);
    const grand_total = parseFloat(data.grand_total);

    return (
      land_price + building_price + sub_total + corner_charege + facing_charge + remoteness_charge + project_management + project_adjustment + floor_charges + unit_charges + grand_total
    )
  }

  const land_price = parseFloat(projectData?.net_selling_rate) * (parseFloat(modelData?.land_share_unit) + parseFloat(unitData?.additional_land_area));

  const building_price = parseFloat(modelData?.one_unit_area) * (parseFloat(companyData?.raw_Markup) + parseFloat(companyData?.economy_markup) + parseFloat(companyData?.deluxe_markup) + parseFloat(companyData?.super_deluxe_markup)+ parseFloat(companyData?.luxury_markup) + parseFloat(companyData?.super_luxury_markup)) + parseFloat(unitData?.additional_builtup_area) * (parseFloat(companyData?.raw_semi_furnished) + parseFloat(companyData?.economy_semi_furnished) + parseFloat(companyData?.deluxe_semi_furnished) + parseFloat(companyData?.super_deluxe_semi_furnished) + parseFloat(companyData?.luxury_semi_furnished) + parseFloat(companyData?.luxury_semi_furnished));


  // Formulas

  const floor_rates = unitData?.floor_level === "2" ? 0.02 : unitData?.floor_level === "3" ? 0.04 : unitData?.floor_level === "4" ? 0.06 : unitData?.floor_level === "5" ? 0.08 : unitData?.floor_level === "6" ? 0.10 : unitData?.floor_level === "7" ? 0.12 : unitData?.floor_level === "8" ? 0.14 : unitData?.floor_level === "9" ? 0.16 : unitData?.floor_level === "10" ? 0.18:0;

  const sub_total = land_price + building_price;

  const corner_factor = (parseFloat(projectData?.corner_factor) * sub_total) / 100;

  const facing_factor = (parseFloat(projectData?.facing_factor) * sub_total);

  const filling_charge = (parseFloat(modelData?.land_share_unit) * parseFloat(projectData?.filling_rate) * parseFloat(unitData?.filling_depth));

  const remoteness_charge = (sub_total * (parseFloat(branchData?.remote_factor) / 100));

  const project_management = (sub_total * (parseFloat(projectData?.project_management))/100);

  const project_adjustment = (sub_total * (parseFloat(projectData?.adjustment_factor))) / 100;


  const floor_charges = (sub_total * floor_rates);

  const unit_charges = (sub_total * (parseFloat(unitData?.adjustment_factor))) / 100;

  const grand_total = sub_total + corner_factor + facing_factor + filling_charge + remoteness_charge + project_management + project_adjustment + floor_charges + unit_charges;

 
  console.log("total screen", unitData);



  return (
    <SafeAreaView className="flex flex-1 bg-[#F15C22]">
      <ScrollView className="flex flex-1 p-[20] bg-white rounded-t-xl">
        <Text className="text-3xl font-bold text-[#333] mb-[20] text-center">Total Details</Text>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Land Price: </Text>
          <Text className="text-md mt-[5]">{land_price ? land_price : "Enter all Fields"}</Text>
        </View>
        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Building Price: </Text>
          <Text className="text-md mt-[5]">{building_price ? building_price : "Enter all Fields"}</Text>
        </View>
        <View className="w-[100%] bg-[#90EE90] flex items-center rounded-lg mb-[10] flex-row justify-center">
          <Text className="text-xl font-bold">Sub Total: </Text>
          <Text className="text-md mt-[5]">{land_price + building_price ? land_price + building_price : "0"}</Text>
        </View>
        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Corner Charge: </Text>
          <Text className="text-md mt-[5]">{corner_factor ? corner_factor : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Facing Charge: </Text>
          <Text className="text-md mt-[5]">{facing_factor ? facing_factor : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Filling Charge: </Text>
          <Text className="text-md mt-[5]">{filling_charge ? filling_charge : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Remoteness Charge: </Text>
          <Text className="text-md mt-[5]">{remoteness_charge ? remoteness_charge : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-lg font-bold">Project Management Charge: </Text>
          <Text className="text-md mt-[5]">{project_management ? project_management : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-lg font-bold">Project Adjustment Charge: </Text>
          <Text className="text-md mt-[5]">{project_adjustment ? project_adjustment : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Floor Level Charge: </Text>
          <Text className="text-md mt-[5]">{floor_charges ? floor_charges : "Enter all Fields"}</Text>
        </View>

        <View className="w-[100%] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Unit Adjustment Charge: </Text>
          <Text className="text-md mt-[5]">{unit_charges ? unit_charges : "Enter all Fields"}</Text>
        </View>


        <View className="w-[100%] bg-[#90EE90] flex items-center rounded-lg mb-[15] flex-row justify-center">
          <Text className="text-xl font-bold">Grand Total: </Text>
          <Text className="text-md mt-[5]">{grand_total ? grand_total : "0"}</Text>
        </View>
       <View className = "flex items-center mt-[14] bg-neutral-400 w-[60%] justify-center h-[34] ml-14 rounded-lg">
        <Button
        size ="large"
        intent="primary"
        onPress ={()=>console.log("save")}
        >
          <Text className ="text-lg">
            Save 
          </Text>
        </Button>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Total;
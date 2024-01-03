import React from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { z, ZodError } from 'zod'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { RadioButton } from "react-native-paper"


const priceCalculatorSchema = z.object({
  purchase_land_rate: z.string().min(1),
  current_land_rate: z.string().min(1),
  land_sell_factor: z.string().min(1),
  total_land_area: z.string().min(1),
  development_charge: z.string().min(1),
  legal_charge: z.string().min(1),
  net_selling_rate: z.string().min(1),
  adjustment_factor: z.string().min(1),
  filling_rate: z.string().min(1),
  facing_factor: z.string().min(1),
  corner_factor: z.string().min(1),
  project_management: z.string().min(1),
});

export default function Project() {
  const navigation = useNavigation();
  const route = useRoute();
  const branchData = route.params?.branchData;
  const modelData = route.params?.modelData;
  const companyData = route.params?.companyData;

  console.log("branchData", branchData);

  const [projectData, setProjectData] = React.useState({
    purchase_land_rate: "",
    current_land_rate: "",
    land_sell_factor: "",
    total_land_area: "",
    development_charge: "",
    legal_charge: "",
    net_selling_rate: "",
    adjustment_factor: "",
    filling_rate: "",
    facing_factor: "",
    corner_factor: "",
    project_management: "",
  });

  const [formErrors, setFormErrors] = React.useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = React.useState<string | null>(null);
  const [facing, setFacing] = React.useState<string | null>(null);

  const calculatePrice = (data: {
    purchase_land_rate: string,
    current_land_rate: string,
    land_sell_factor: string,
    total_land_area: string,
    development_charge: string,
    legal_charge: string,
    net_selling_rate: string,
    adjustment_factor: string,
    filling_rate: string,
    facing_factor: string,
    corner_factor: string,
    project_management: string,
  }): number => {

    const purchase_land_rate = parseFloat(data.purchase_land_rate);
    const current_land_rate = parseFloat(data.current_land_rate);
    const land_sell_factor = parseFloat(data.land_sell_factor);
    const total_land_area = parseFloat(data.total_land_area);
    const development_charge = parseFloat(data.development_charge);
    const legal_charge = parseFloat(data.legal_charge);
    const net_selling_rate = parseFloat(data.net_selling_rate);
    const adjustment_factor = parseFloat(data.adjustment_factor);
    const filling_rate = parseFloat(data.filling_rate);
    const facing_factor = parseFloat(data.facing_factor);
    const corner_factor = parseFloat(data.corner_factor);
    const project_management = parseFloat(data.project_management);

    return (
      purchase_land_rate * current_land_rate * land_sell_factor * total_land_area * development_charge * legal_charge * net_selling_rate * adjustment_factor * filling_rate * facing_factor * corner_factor * project_management
    )
  }

  const handleSaveInfo = () => {
    try {
      priceCalculatorSchema.parse(projectData);
      console.log("Validation successful. Data:", projectData);
      navigation.navigate('Unit', { projectData, branchData, modelData, companyData });
    } catch (error) {
      setFormErrors(error);
      console.error("Validation failed. Error:", error);
    }
  }

  const handlePress = (facing: string, factor: string) => {
    setFacing(facing)
    setProjectData({ ...projectData, facing_factor: factor })
  }

  console.log("projectData", projectData.facing_factor)

  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-[10]">
          <Text  className = "text-lg font-bold mb-[10]">Purchase Land Rate</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Purchase Land Rate"
            onChangeText={(text) => setProjectData({ ...projectData, purchase_land_rate: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Current Land Rate</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Current Land Rate"
            onChangeText={(text) => setProjectData({ ...projectData, current_land_rate: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Land Sell Factor</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Land Sell Factor"
            onChangeText={(text) => setProjectData({ ...projectData, land_sell_factor: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Total Land Area</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Total Land Area"
            onChangeText={(text) => setProjectData({ ...projectData, total_land_area: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Development Charge</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Development Charge"
            onChangeText={(text) => setProjectData({ ...projectData, development_charge: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Legal Charge</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Legal Charge"
            onChangeText={(text) => setProjectData({ ...projectData, legal_charge: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Net Selling Rate</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Net Selling Rate"
            onChangeText={(text) => setProjectData({ ...projectData, net_selling_rate: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Adjustment Factor</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Adjustment Factor"
            onChangeText={(text) => setProjectData({ ...projectData, adjustment_factor: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Filling Rate</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Filling Rate"
            onChangeText={(text) => setProjectData({ ...projectData, filling_rate: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Facing Factor</Text>
          <View className="flex flex-row">
            <RadioButton
              value="East"
              status={facing === 'east' ? 'checked' : 'unchecked'}
              onPress={() => handlePress("east", "0.05")}

            />
            <Text className="text-lg font-semibold mr-3 mt-1">East</Text>

            <RadioButton
              value="West"
              status={facing === 'west' ? 'checked' : 'unchecked'}
              onPress={() => handlePress("west", "0.04")}
            />

            <Text className="text-lg font-semibold mr-3 mt-1">West</Text>

            <RadioButton
              value="North"
              status={facing === 'north' ? 'checked' : 'unchecked'}
              onPress={() => handlePress("north", "0.03")}

            />

            <Text className="text-lg font-semibold mr-3 mt-1">North</Text>

            <RadioButton
              value="South"
              status={facing === 'south' ? 'checked' : 'unchecked'}
              onPress={() => handlePress("south", "0.02")}
            />

            <Text className="text-lg font-semibold mr-3 mt-1">South</Text>

          </View>

          <Text  className = "text-lg font-bold mb-[10]">Corner Factor</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Corner Factor"
            onChangeText={(text) => setProjectData({ ...projectData, corner_factor: text })}
          />

          <Text  className = "text-lg font-bold mb-[10]">Project Management</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Project Management"
            onChangeText={(text) => setProjectData({ ...projectData, project_management: text })}
          />

          <TouchableOpacity
            style={{ backgroundColor: '#F15C22', padding: 10, borderRadius: 10, marginBottom: 10, marginTop: 10}}
            onPress={() => handleSaveInfo()}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Save Info</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

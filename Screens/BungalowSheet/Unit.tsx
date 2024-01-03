import React from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { z, ZodError } from 'zod'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';
import { RadioButton } from "react-native-paper"


const priceCalculatorSchema = z.object({
  adjustment_factor: z.string().min(1),
  filling_depth: z.string().min(1),
  floor_level: z.string().min(1),
  corner_factor: z.string().min(1),
  facing_factor: z.string().min(1),
  additional_builtup_area: z.string().min(1),
  additional_land_area: z.string().min(1),
});

export default function Unit() {

  const navigation = useNavigation();
  const route = useRoute();
  const projectData = route.params?.projectData;
  const branchData = route.params?.branchData;
  const modelData = route.params?.modelData;
  const companyData = route.params?.companyData;


  const [unitData, setUnitData] = React.useState({
    adjustment_factor: "",
    filling_depth: "",
    floor_level: "",
    corner_factor: "",
    facing_factor: "",
    additional_builtup_area: "",
    additional_land_area: "",
  });

  const [formErrors, setFormErrors] = React.useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = React.useState<string | null>(null);
  const [facing, setFacing] = React.useState<string | null>(null);

  const calculatePrice = (data: {
    adjustment_factor: string,
    filling_depth: string,
    floor_level: string,
    corner_factor: string,
    facing_factor: string,
    additional_builtup_area: string,
    additional_land_area: string,
  }): number => {
    const adjustment_factor = parseFloat(data.adjustment_factor);
    const filling_depth = parseFloat(data.filling_depth);
    const floor_level = parseFloat(data.floor_level);
    const corner_factor = parseFloat(data.corner_factor);
    const facing_factor = parseFloat(data.facing_factor);
    const additional_builtup_area = parseFloat(data.additional_builtup_area);
    const additional_land_area = parseFloat(data.additional_land_area);


    return (
      adjustment_factor * filling_depth * floor_level * corner_factor * facing_factor * additional_builtup_area * additional_land_area
    )
  }


  const handleSaveInfo = () => {
    try {
      priceCalculatorSchema.parse(projectData);
      console.log("Validation successful. Data:", unitData);
      navigation.navigate('Total', { projectData, branchData, modelData, companyData, unitData });
    } catch (error) {
      setFormErrors(error);
      console.error("Validation failed. Error:", error);
    }
  }

  const handlePress = (facing: string, factor: string) => {
    setFacing(facing)
    setUnitData({ ...unitData, facing_factor: factor })
  }



  return (
    <SafeAreaView>
      <ScrollView>
        <View className="p-[10]">

          <Text className="text-lg font-bold mb-[10]">Adjustment Factor</Text>
          <TextInput
            className="border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Adjustment Factor"
            onChangeText={(text) => setUnitData({ ...unitData, adjustment_factor: text })}
          />

          <Text className="text-lg font-bold mb-[10]">Filling Depth</Text>
          <TextInput
            className="border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Filling Depth"
            onChangeText={(text) => setUnitData({ ...unitData, filling_depth: text })}
          />

          <Text className="text-lg font-bold mb-[10]">Choose floor level</Text>
          <TextInput
            className="border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter floor level"
            onChangeText={(text) => setUnitData({ ...unitData, floor_level: text })}
          />

          <Text className="text-lg font-bold mb-[10]">Corner Plot</Text>
          <TextInput
            className="border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Corner Plot"
            onChangeText={(text) => setUnitData({ ...unitData, corner_factor: text })}
          />

          <Text className="text-lg font-bold mb-[10]">Facing Factor</Text>
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

          <Text className="text-lg font-bold mb-[10]">Additional/semi-finished Builtup Area
</Text>
          <TextInput
            className="border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Additional/semi-finished Builtup Area"
            onChangeText={(text) => setUnitData({ ...unitData, additional_builtup_area: text })}
          />

          <Text className="text-lg font-bold mb-[10]">Additional Land Area
</Text>
          <TextInput
            className="border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="Enter Additional Land Area"
            onChangeText={(text) => setUnitData({ ...unitData, additional_land_area: text })}
          />

          <TouchableOpacity
            style={{ backgroundColor: '#F15C22', padding: 10, borderRadius: 10, marginBottom: 10, marginTop: 10 }}
            onPress={() => handleSaveInfo()}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Save Info</Text>
          </TouchableOpacity>

        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

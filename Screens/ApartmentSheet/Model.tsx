import React from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { z, ZodError } from 'zod'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const priceCalculatorSchema = z.object({
  one_unit_area: z.string().min(1),
  one_plate_area: z.string().min(1),
  total_covered_area: z.string().min(1),
  land_share_unit: z.string().min(1),
  floor_no: z.string().min(1),
});


export default function Model() {
  const navigation = useNavigation();

  const route = useRoute();
  const companyData = route.params?.companyData;
  console.log("companyData", companyData);
  const [modelData, setModelData] = React.useState({
    one_unit_area: "",
    one_plate_area: "",
    total_covered_area: "",
    land_share_unit: "",
    floor_no: "",
  });

  const [formErrors, setFormErrors] = React.useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = React.useState<string | null>(null);

  const calculatePrice = (data: {
    one_unit_area: string,
    one_plate_area: string,
    total_covered_area: string,
    land_share_unit: string,
    floor_no: string,
  }): number => {

    const one_unit_area = parseFloat(data.one_unit_area);
    const one_plate_area = parseFloat(data.one_plate_area);
    const total_covered_area = parseFloat(data.total_covered_area);
    const land_share_unit = parseFloat(data.land_share_unit);
    const floor_no = parseFloat(data.floor_no);


    return (
      one_unit_area * one_plate_area * total_covered_area * land_share_unit * floor_no
    )
  }

  const handleSaveInfo = () => {
    try {
      priceCalculatorSchema.parse(modelData);
      console.log("Validation successful. Data:", modelData);
      navigation.navigate('Branch', { modelData,companyData });
    } catch (error) {
      setFormErrors(error);
      console.error("Validation failed. Error:", error);
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 10 }}>
          <Text className = "text-lg font-bold mb-[10]">One Unit Area</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="No Default Unit Area"
            onChangeText={(text) => setModelData({ ...modelData, one_unit_area: text })}
          />
          <Text className = "text-lg font-bold mb-[10]">One Plate Area</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="No Default Unit Area"
            onChangeText={(text) => setModelData({ ...modelData, one_plate_area: text })}
          />
          <Text className = "text-lg font-bold mb-[10]">Total Covered Area</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="No Default Unit Area"
            onChangeText={(text) => setModelData({ ...modelData, total_covered_area: text })}
          />
          <Text className = "text-lg font-bold mb-[10]">Land Share Unit</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="No Defau;t Unit Area"
            onChangeText={(text) => setModelData({ ...modelData, land_share_unit: text })}
          />
          <Text className = "text-lg font-bold mb-[10]">Floor No</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="No Default Floor No"
            onChangeText={(text) => setModelData({ ...modelData, floor_no: text })}
          />


          <TouchableOpacity className = "bg-[#F15C22] p-[10] rounded-md mb-[10]"
            onPress={()=>handleSaveInfo()}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Save Info</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>


    </SafeAreaView>
  )

}

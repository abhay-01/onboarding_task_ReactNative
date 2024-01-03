import React from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { z, ZodError } from 'zod'
import { useNavigation } from '@react-navigation/native';
import { useRoute } from '@react-navigation/native';


const priceCalculatorSchema = z.object({
  remote_factor: z.string().min(1),
  base_builtup_rate: z.string().min(1),
  base_builtup_floor_rate: z.string().min(1),
});

export default function Branch() {

  const navigation = useNavigation();
  const route = useRoute();
  const modelData = route.params?.modelData;
  const companyData = route.params?.companyData;

  console.log("modelData", modelData);

  const [branchData, setBranchData] = React.useState({
    remote_factor: "",
    base_builtup_rate: "1000",
    base_builtup_floor_rate: "1000",
  });

  const [formErrors, setFormErrors] = React.useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = React.useState<string | null>(null);

  const calculatePrice = (data: {
    remote_factor: string,
    base_builtup_rate: string,
    base_builtup_floor_rate: string,
  }): number => {

    const remote_factor = parseFloat(data.remote_factor);
    const base_builtup_rate = parseFloat(data.base_builtup_rate);
    const base_builtup_floor_rate = parseFloat(data.base_builtup_floor_rate);

    return (
      remote_factor * base_builtup_rate * base_builtup_floor_rate
    )
  }

  const handleSaveInfo = () => {
    try {
      priceCalculatorSchema.parse(branchData);
      console.log("Validation successful. Data:", branchData);
      navigation.navigate('Project', { branchData, modelData, companyData });
    } catch (error) {
      if (error instanceof ZodError) {
        setFormErrors(error);
      }
    }
  };
  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: 10 }}>

          <Text  className = "text-lg font-bold mb-[10]">Remoteness Factor
          </Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="No Default Factor"
            onChangeText={(text) => setBranchData({ ...branchData, remote_factor: text })}
          />
          <Text  className = "text-lg font-bold mb-[10]">Base Builtup rate (raw)
          </Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="1000 Default Rate"
            onChangeText={(text) => setBranchData({ ...branchData, base_builtup_rate: text })}
          />
          <Text  className = "text-lg font-bold mb-[10]">Base Builtup rate (raw) with addition of floor
</Text>
          <TextInput
            className = "border border-1 border-black p-[10] mb-[10]"
            keyboardType="numeric"
            placeholder="1000 Default Rate"
            onChangeText={(text) => setBranchData({ ...branchData, base_builtup_floor_rate: text })}
          />


          <TouchableOpacity
            className ="bg-[#F15C22] p-[10] rounded-md mb-[10]"
            onPress={() => handleSaveInfo()}
          >
            <Text style={{ color: '#fff', textAlign: 'center' }}>Save Info</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

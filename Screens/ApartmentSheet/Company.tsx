import React from 'react'
import { Text, View, ScrollView, TextInput, TouchableOpacity } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { z, ZodError } from 'zod'
import { useNavigation } from '@react-navigation/native';


const priceCalculatorSchema = z.object({
  raw_Markup: z.string().min(1),
  economy_markup: z.string().min(1),
  deluxe_markup: z.string().min(1),
  super_deluxe_markup: z.string().min(1),
  luxury_markup: z.string().min(1),
  super_luxury_markup: z.string().min(1),
  raw_semi_furnished: z.string().min(1),
  economy_semi_furnished: z.string().min(1),
  deluxe_semi_furnished: z.string().min(1),
  super_deluxe_semi_furnished: z.string().min(1),
  luxury_semi_furnished: z.string().min(1),
});

export default function Company() {

  const navigation = useNavigation();
  const [companyData, setCompanyData] = React.useState({
    raw_Markup: "1000",
    economy_markup: "200",
    deluxe_markup: "200",
    super_deluxe_markup: "200",
    luxury_markup: "200",
    super_luxury_markup: "200",
    raw_semi_furnished: "1000",
    economy_semi_furnished: "1000",
    deluxe_semi_furnished: "1000",
    super_deluxe_semi_furnished: "1000",
    luxury_semi_furnished: "1000",
  });

  const [formErrors, setFormErrors] = React.useState<ZodError | null>(null);
  const [calculatedPrice, setCalculatedPrice] = React.useState<string | null>(null);


  const handleCalculatePrice = () => {
    try {
      const validateData = priceCalculatorSchema.parse(formData);

      const calculatedPrice = calculatePrice(validateData);
      setCalculatedPrice(calculatedPrice);
    } catch (error) {
      setFormErrors(error);
    }
  }

  const calculatePrice = (data: {
    raw_Markup: string,
    economy_markup: string,
    deluxe_markup: string,
    super_deluxe_markup: string,
    luxury_markup: string,
    super_luxury_markup: string,
    raw_semi_furnished: string,
    economy_semi_furnished: string,
    deluxe_semi_furnished: string,
    super_deluxe_semi_furnished: string,
    luxury_semi_furnished: string,
  }): number => {
    const raw_Markup = 1000;
    const economy_markup = 200;
    const deluxe_markup = 200;
    const super_deluxe_markup = 200;
    const luxury_markup = 200;
    const super_luxury_markup = 200;
    const raw_semi_furnished = 1000;
    const economy_semi_furnished = 1000;
    const deluxe_semi_furnished = 1000;
    const super_deluxe_semi_furnished = 1000;
    const luxury_semi_furnished = 1000;

    return (
      raw_Markup + economy_markup + deluxe_markup + super_deluxe_markup + luxury_markup + super_luxury_markup + raw_semi_furnished + economy_semi_furnished + deluxe_semi_furnished + super_deluxe_semi_furnished + luxury_semi_furnished
    )
  }

  console.log(companyData);
  return (

    <SafeAreaView className="flex flex-1">
      <ScrollView className="flex flex-col"
        showsVerticalScrollIndicator={false}>

        {/* Raw Markup */}
        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Raw Markup</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, raw_Markup: text })}
          />
        </View>

        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Economy Markup */}
        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Economy Markup</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='200 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, economy_markup: text })}
          />
        </View>
        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>


        {/* Deluxe Markup */}

        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Deluxe Markup</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='200 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, deluxe_markup: text })}
          />
        </View>
        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>


        {/* Super Deluxe Markup */}


        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Super Deluxe Markup</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='200 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, super_deluxe_markup: text })}
          />
        </View>

        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Luxury Markup */}

        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Luxury Markup</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='200 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, luxury_markup: text })}
          />
        </View>

        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Super Luxury Markup */}


        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Super Luxury Markup</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='200 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, super_deluxe_markup: text })}
          />
        </View>

        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>


        {/* Raw Markup(Semi-Furnished) */}

        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl leading-6">Raw Markup(Semi-Furnished)</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, raw_semi_furnished: text })}
          />
        </View>

        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Economy Markup(Semi-Furnished) */}

        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Economy Markup(Semi-Furnished)</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, economy_semi_furnished: text })}
          />
        </View>
        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Deluxe Markup(Semi-Furnished) */}


        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Deluxe Markup(Semi-Furnished)</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, deluxe_semi_furnished: text })}
          />
        </View>
        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>


        {/* Super Deluxe Markup(Semi-Furnished) */}
        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Super Deluxe Markup(Semi-Furnished)</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, super_deluxe_semi_furnished: text })}
          />
        </View>
        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Luxury Markup(Semi-Furnished) */}

        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Luxury Markup(Semi-Furnished)</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}

            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, luxury_semi_furnished: text })}
          />
        </View>
        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        {/* Super Luxury Markup(Semi-Furnished) */}


        <View className="flex flex-col items-center justify-center mb-5">
          <Text className="mr-10 text-xl">Super Luxury Markup(Semi-Furnished)</Text>
          <TextInput
            style={{ borderWidth: 1, borderColor: '#000', padding: 10, marginBottom: 10 }}
            keyboardType="numeric"
            placeholder='1000 is Default Pricing'
            onChangeText={(text) => setCompanyData({ ...companyData, super_deluxe_semi_furnished: text })}
          />
        </View>

        <View className="w-[88%] bg-neutral-600 h-[1] ml-5 mb-5"></View>

        <TouchableOpacity
          className="bg-[#F15C22] p-[10] rounded-t-xl rounded-b-xl mb-[10] ml-7 mr-7"
          onPress={() => navigation.navigate('Model', { companyData })}
        >
          <Text style={{ color: '#fff', textAlign: 'center' }}>Save Info</Text>
        </TouchableOpacity>

      </ScrollView>

    </SafeAreaView>
  )
}
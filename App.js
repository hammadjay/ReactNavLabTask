import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const HomeScreen = ({ navigation }) => {
  return (
    <View
      style={{
        display: "flex",
        alignItems: "center",
        height: "40%",
        justifyContent: "space-between",
      }}
    >
      <Text style={{ fontSize: 25, marginBottom: 10 }}>Welcome Admin !</Text>
      <View>
        <TouchableOpacity
          style={{ marginVertical: 15 }}
          onPress={() => {
            navigation.navigate("Products list");
          }}
        >
          <Text style={{ color: "skyblue", fontWeight: "bold", fontSize: 20 }}>
            Manage Products
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginVertical: 15 }}
          onPress={() => {
            navigation.navigate("Employee list");
          }}
        >
          <Text style={{ color: "skyblue", fontWeight: "bold", fontSize: 20 }}>
            Manage Employees
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{ marginVertical: 15 }}
          onPress={() => {
            navigation.navigate("Orders List");
          }}
        >
          <Text style={{ color: "skyblue", fontWeight: "bold", fontSize: 20 }}>
            Manage Orders
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const ManageProducts = ({ navigation }) => {
  const products = [
    {
      id: 1,
      prod: "NZXT H510 gaming Case",
      price: "$69.99",
      rating: "4.5",
      status: "Available",
      image:
        "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/n/z/nzxt_h510_elite_premium_compact_mid-tower_atx_computer_case_-_matte_black_-_tejar_1.jpg",
    },
    {
      id: 2,
      prod: "Gigabyte B85m Gaming Motherboard",
      price: "$99",
      rating: "4.1",
      status: "Available",
      image:
        "https://static.gigabyte.com/StaticFile/Image/Global/af9ccfdb29bc2765aa4dd8d369ac3e53/Product/8875/png/500",
    },
    {
      id: 3,
      prod: "Asus RTX 2070 8GB OC Edition",
      price: "$auqat se bahr",
      rating: "3.9",
      status: "Out of stock",
      image: "https://gadgetzone.pk/wp-content/uploads/2019/11/2070-12.jpg",
    },
    {
      id: 4,
      prod: "Steelseries Arctis Pro Headset",
      price: "$190",
      rating: "4.7",
      status: "Available",
      image:
        "https://www.tejar.pk/media/catalog/product/cache/3/image/9df78eab33525d08d6e5fb8d27136e95/s/t/steelseries_arctis_pro_wireless_headset_5_-_tejar_1.jpg",
    },
    {
      id: 5,
      prod: "Razer DeathAdder V2 Gaming Mouse",
      price: "$80",
      rating: "4.9",
      status: "Out of stock",
      image:
        "https://vmart.pk/wp-content/uploads/2020/10/Razer-DeathAdder-3-V2.jpg",
    },
  ];
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>
        Products
      </Text>
      <View>
        {products.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{ borderBottomWidth: 2 }}
              onPress={() => {
                navigation.navigate("Products details", { item });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.prod}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const ProductDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>
        Product Details
      </Text>
      <View>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          Product Name: {item.prod}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          Price: {item.price}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          Rating: {item.rating}/5
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10, color: "black" }}>
          Status:{" "}
          <Text
            style={{ color: item.status === "Available" ? "green" : "red" }}
          >
            {item.status}
          </Text>
        </Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{ uri: item.image }}
        />
      </View>
    </View>
  );
};
const EmployeesList = ({ navigation }) => {
  const employee = [
    {
      id: 1,
      name: "Hammad jamil",
      age: "21",
      designation: "CEO",
      picture:
        "data:image/png;base64,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",
    },
    {
      id: 2,
      name: "Ahsan Khan",
      age: "23",
      designation: "Product manager",
      picture:
        "data:image/png;base64,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",
    },
    {
      id: 3,
      name: "Ghulam Jaffar",
      age: "20",
      designation: "Branch manager",
      picture:
        "data:image/png;base64,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",
    },
    {
      id: 4,
      name: "Awais Aqeel",
      age: "24",
      designation: "Website developer",
      picture:
        "data:image/png;base64,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",
    },
    {
      id: 5,
      name: "Esfandyar Ali khan",
      age: "23",
      designation: "HR",
      picture:
        "data:image/png;base64,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",
    },
  ];
  return (
    <View style={{ alignItems: "center", flex: 1 }}>
      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>
        Products
      </Text>
      <View>
        {employee.map((item) => {
          return (
            <TouchableOpacity
              key={item.id}
              style={{ borderBottomWidth: 2 }}
              onPress={() => {
                navigation.navigate("Employee details", { item });
              }}
            >
              <Text style={{ fontSize: 20, fontWeight: "bold", padding: 5 }}>
                {item.name}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const EmployeesDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>
        Product Details
      </Text>
      <View>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          Employee ID: {item.id}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          Employee Name: {item.name}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>Age: {item.age}</Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          Designation: {item.designation}
        </Text>
        <Image
          style={{ height: 300, width: 300 }}
          source={{ uri: item.picture }}
        />
      </View>
    </View>
  );
};
const OrdersList = ({ navigation }) => {
  const orders = [
    {
      orderID: 12326,
      product: "Razer DeathAdder V2 Gaming Mouse",
      price: "80$",
      customer:{
        name:'Eren yaeger',
        contact:'0333-1234567',
        address:'street 69 house 420, DHA , paradise island'
      },
      orderDate:'12/5/2021',
      shippingStatus:'processing'
    },
    {
      orderID: 224262,
      product: "Gigabyte B85m Gaming Motherboard",
      price: "$99",
      customer:{
        name:'sova achakzai',
        contact:'0333-1234567',
        address:'street 420 house 69, mohalla cyka,russia'
      },
      orderDate:'19/5/2021',
      shippingStatus:'delivered'
    },
  ];
  return (
    <View style={{ alignItems: "center", flex: 1 }} >
      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>Orders List </Text>

      <View >
      {orders.map((item) => {
          return (
            <TouchableOpacity
              key={item.orderID}
              style={{ borderBottomWidth: 2 }}
              onPress={() => {
                navigation.navigate("Orders details", { item });
              }}
            >
              <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>
               Order# {item.orderID}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>
               Product: {item.product}
              </Text>
              <Text style={{ fontSize: 15, fontWeight: "bold", padding: 5 }}>
                Pri ce:{item.price}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};
const OrderDetails = ({ navigation, route }) => {
  const { item } = route.params;
  return (
    <View style={{ alignItems: "center", flex: 1, backgroundColor: "white" }}>
      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>
        Orders Details
      </Text>
      <View>
        <View style={ {flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
          Order#{" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
          {item.orderID}
        </Text>
        </View>

        <View style={ {flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
        product: {" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.product}
        </Text>
        </View>



        <View style={ {flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
        Price: {" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.price}
        </Text>
        </View>
        <View style={ {flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
        Order date: {" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.orderDate}
        </Text>
        </View>
        <View style={ {flexDirection:'row'}}>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
        Shipping status:{" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.shippingStatus}
        </Text>
        </View>

      </View>

      <Text style={{ fontSize: 25, paddingBottom: 10, borderBottomWidth: 2 }}>
        Customer Details
      </Text>
      <View>
        <View>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
          Customer name: {" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.customer.name}
        </Text>
        </View>

        <View>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
        Customer contact:  {" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.customer.contact}
        </Text>
        </View>

        <View>
        <Text style={{ fontSize: 18, paddingBottom: 10 ,fontWeight:"bold"}}>
          Customer address: {" "}
        </Text>
        <Text style={{ fontSize: 18, paddingBottom: 10 }}>
        {item.customer.address}
        </Text>
        </View>
        
      </View>
    </View>
  );
};
const Stack = createStackNavigator();

function MyNav() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Products list" component={ManageProducts} />
      <Stack.Screen name="Products details" component={ProductDetails} />
      <Stack.Screen name="Employee details" component={EmployeesDetails} />
      <Stack.Screen name="Employee list" component={EmployeesList} />
      <Stack.Screen name="Orders List" component={OrdersList} />
      <Stack.Screen name="Orders details" component={OrderDetails} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <MyNav />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

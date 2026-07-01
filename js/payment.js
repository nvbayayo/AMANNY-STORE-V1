function saveOrder() {

const orders =
JSON.parse(
localStorage.getItem("orders")
) || [];

const order = {

server:
localStorage.getItem("server_name"),

product:
localStorage.getItem("package_name"),

price:
localStorage.getItem("package_price"),

userId:
localStorage.getItem("mlbb_user_id"),

zoneId:
localStorage.getItem("mlbb_zone_id"),

date:
new Date().toLocaleString(),

status:
"Pending"

};

orders.push(order);

localStorage.setItem(
"orders",
JSON.stringify(orders)
);

return order;
}

function sendOrder() {

const order = saveOrder();

const phone =
"919876543210"; // Your WhatsApp Number

const message = `
🔥 NEW MLBB ORDER

👤 User ID: ${order.userId}
🆔 Zone ID: ${order.zoneId}

🌍 Server: ${order.server}

💎 Package: ${order.product}

💰 Price: ₹${order.price}

📅 ${order.date}

⚡ AMANNY STORE
`;

window.open(
`https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
"_blank"
);

}

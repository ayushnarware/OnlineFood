The project titled “Online Food Ordering Application” is a full-stack web application designed to streamline the process of food ordering for both customers and restaurants. It aims to provide a user-friendly interface for placing food orders online, managing restaurants, and handling real-time order processing. This application has been developed using modern web technologies to ensure high performance, scalability, and ease of use.
For the frontend, the application utilizes React JS, Redux, HTML, CSS, and JavaScript to build a responsive and dynamic user interface. The backend is powered by Java Spring Boot, which facilitates robust server-side operations and seamless communication between the frontend and the database. MySQL serves as the relational database management system for storing and retrieving data efficiently.
The system supports essential features such as user login, registration, and password recovery, ensuring secure and personalized access to the platform. The application is structured around two primary user roles – Customer and Restaurant – each having distinct access rights and functionalities.
For users registered as Restaurant owners, the system allows them to create and manage their restaurant profiles by filling in detailed information. They can also maintain a list of ingredients, define food categories, and build comprehensive menus. The restaurant dashboard provides insights into orders, displays recent orders, recently added items, and includes an Events section to highlight active or upcoming promotional events. All restaurant details are maintained in a structured table format with status indicators for administrative tracking.
On the Customer side, upon logging in, users are presented with a home page showcasing top deals and a list of restaurants. Customers can view restaurant menus, add items to their cart, and search for specific food items using the search bar. The cart page displays the total bill along with address selection options. Once an address is selected, the system navigates to the payment page, where users can enter card details and complete the transaction. Upon successful payment, an order confirmation message is displayed. Customers can view their order history and status through the My Orders section and receive timely notifications. The Customer dashboard also includes an Events tab that lists promotional events created by restaurants.
Additionally, the system includes a Super Admin role, which has access to all critical data within the application. The Super Admin is responsible for managing both customer and restaurant accounts and handling restaurant registration requests, ensuring smooth administration across the platform.
Overall, the Online Food Ordering Application serves as a comprehensive solution for managing online food orders with an emphasis on user experience, administrative control, and operational efficiency.
Restaurant Role
The Restaurant role in the Online Food Ordering Application is designed to empower restaurant owners or managers with comprehensive tools to manage their business on the platform. Upon successful registration and authentication, users with the Restaurant role gain access to a dedicated dashboard where they can create and manage their restaurant profiles and offerings.
Once registered, the restaurant user is prompted to create a new restaurant, providing all necessary details such as the restaurant name, description, location, contact information, and other relevant attributes. This ensures that each restaurant has a distinct presence on the platform and can be easily discovered by customers.
After creating the restaurant profile, the restaurant user can perform the following key functions:
•	Ingredient Management: Add and manage a list of ingredients used in various food items. This feature helps in inventory tracking and planning.
•	Food Category Management: Create and categorize different types of food offerings (e.g., starters, main course, beverages, desserts) to organize the menu in a structured and intuitive manner.
•	Menu Management: Build a dynamic and detailed menu by adding food items under relevant categories. Each menu item includes information such as name, description, price, and availability status.
The Restaurant Dashboard serves as a control center where the user can monitor and manage various aspects of the restaurant’s operations, including:
•	Orders Overview: A summary of all received orders, including their statuses (e.g., pending, confirmed, completed).
•	Recent Orders: A list of the most recent orders placed by customers.
•	Recently Added Items: A section showcasing the latest additions to the restaurant’s menu.
•	Events Section: An interface for creating and managing promotional events or special offers. These events are visible to customers under the Events tab, helping restaurants attract more engagement and boost sales.
All restaurant-related data is displayed in a well-organized table format, with clear indicators of item statuses and options for updating or modifying existing entries.
The Restaurant role is designed with scalability and flexibility in mind, allowing multiple restaurants to operate independently within the platform. It ensures that restaurant owners have complete control over their profiles, menus, and customer interactions, thereby facilitating smooth business operations in a digital environment.
Customer Role
The Customer role in the Online Food Ordering Application is focused on delivering a seamless and user-friendly experience for individuals who wish to browse restaurants, explore menus, and place food orders online. Customers are the primary end-users of the platform, and the system is designed to meet their expectations in terms of ease, speed, and reliability.
Upon successful login or registration, the customer is redirected to the Home Page, which displays an interactive interface showcasing:
•	Top Deals: Special offers and promotional discounts curated by various restaurants.
•	List of Restaurants: A scrollable feed of all available restaurants, complete with basic details like name, type, and ratings.
Customers can click on any restaurant to view its complete menu, categorized by food types such as starters, beverages, main courses, and desserts. Each menu item displays essential information including item name, description, price, and availability.
Key functionalities available to the Customer role include:
•	Add to Cart: Customers can add multiple food items from a restaurant to their cart while browsing the menu.
•	Search Feature: A dedicated search bar allows users to quickly find specific food items or restaurants by entering keywords.
•	Cart Page: This section summarizes the selected items, their quantities, and the total bill amount. Customers can also select or update their delivery address from here.
•	Payment Processing: After confirming the address, the user is directed to the Payment Page, where they can securely enter card details and complete the transaction.
•	Order Confirmation: Upon successful payment, a confirmation message is displayed, and the order is processed.
The My Orders section provides a historical view of all past and current orders, along with their respective statuses such as "Processing", "Dispatched", or "Delivered". This allows users to track their orders in real-time and stay updated.
In addition to order-related features, the Customer Dashboard includes an Events tab, where users can view special events, deals, or seasonal promotions posted by various restaurants. This enhances user engagement and promotes offers directly to potential customers.
To keep customers informed, the application also includes a notifications system that alerts users about order updates, delivery status, and exclusive offers.
Overall, the Customer role is crafted to offer a smooth, secure, and engaging food ordering experience. The intuitive interface, robust functionality, and real-time updates ensure maximum satisfaction and convenience for end-users.
Super Admin Role
The Super Admin role in the Online Food Ordering Application plays a crucial part in managing and maintaining the overall functionality, security, and integrity of the platform. This role is designed for system administrators who are responsible for overseeing all user activities, moderating content, and ensuring a seamless operational workflow across the application.
Unlike the Customer and Restaurant roles, which have specific and limited access, the Super Admin has complete authority and unrestricted access to all components of the system. This includes managing users, monitoring transactions, handling restaurant approvals, and maintaining data consistency.
The core responsibilities and features available to the Super Admin include:
•	User Management:
	View and manage all registered Customers and Restaurants.
	Access complete user profiles, including personal information, account status, and activity history.
	Enable, disable, or delete user accounts as necessary to maintain platform security.
•	Restaurant Request Handling:
	Review and approve or reject new restaurant registration requests.
	Ensure that only legitimate and fully verified restaurants are listed on the platform.
	Maintain the status of restaurants (e.g., pending, approved, rejected) with administrative remarks.
•	System Monitoring:
	Access a centralized dashboard that displays key platform metrics such as the total number of users, active orders, registered restaurants, and completed transactions.
	Monitor performance issues, user behaviour patterns, and system logs for auditing and compliance.
•	Content Moderation:
	Oversee events, offers, and promotional content created by restaurants to ensure adherence to platform policies and guidelines.
	Remove or flag inappropriate content when necessary.
•	Security and Compliance:
	Maintain the application’s security standards by managing sensitive configurations, overseeing data access, and ensuring compliance with data protection policies.
The Super Admin role is pivotal to the success and reliability of the platform. It ensures that all stakeholders—customers, restaurants, and system components—operate within defined rules and that the platform remains trustworthy, efficient, and scalable.
By centralizing administrative control, the Super Admin acts as the backbone of the system, providing essential oversight and governance required to maintain a professional and user-friendly food ordering environment.
Online Payments Integration
The Online Food Ordering Application integrates Stripe for secure and seamless online payments. Stripe is a widely trusted payment gateway that allows customers to make transactions using credit or debit cards directly through the platform. The integration ensures fast, reliable, and encrypted payment processing, providing a secure environment for both customers and restaurants. Customers can easily enter their payment details and complete their orders without leaving the platform, while restaurants receive instant confirmation of payment. The use of Stripe enhances the user experience by offering a simple, efficient, and secure payment solution for online food orders.

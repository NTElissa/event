# Event Management

## PR Description
**Add Event Retrieval Functionality**

## Functionality
This functionality allows users, particularly managers, to retrieve events stored in the system. Managers can fetch event details such as title, description, start time, end time, and location. Event retrieval can be based on event IDs, enabling users to retrieve specific events or all events.

## How Has This Been Tested?
Testing this functionality involves the following steps:

1. Clone the repository:
git clone https://github.com/NTElissa/event.git


2. Install dependencies: npm install

3. Create an `.env` file and configure it.

4. Connect to the MongoDB database.

5. Run the application in development mode: npm run dev


6. Test the routes using Postman.

### Routes to Test in Postman

1. **Create an Event**
- Endpoint: `http://localhost:6000/api/v1/event`
- Request Body:
  ```json
  {
  
  "title": "Event Title",
  "description": "Event Description",
  "startTime": "2032-10-31T09:00:00Z (Start Time)",
  "endTime": "2092-10-31T09:00:00Z (End Time)",
  "location": "Kigali (Event Location)"


  }
  ```

2. **Get a Specific Event**
- Endpoint: `http://localhost:6000/api/v1/event/get/:id`

3. **Get All Events**
- Endpoint: `http://localhost:6000/api/v1/event/getall`

4. **Update an Event**
- Endpoint: `http://localhost:6000/api/v1/event/update/:id`

5. **Delete an Event**
- Endpoint: `http://localhost:6000/api/v1/event/delete/:id`



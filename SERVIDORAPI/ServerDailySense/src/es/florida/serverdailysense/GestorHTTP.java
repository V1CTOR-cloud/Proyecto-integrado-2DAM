package es.florida.serverdailysense;

import java.io.BufferedReader;
import java.io.IOException;
import java.io.InputStream;
import java.io.InputStreamReader;
import java.io.OutputStream;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;

import org.json.JSONArray;
import org.json.JSONObject;

import com.sun.net.httpserver.HttpExchange;
import com.sun.net.httpserver.HttpHandler;

public class GestorHTTP implements HttpHandler {

	@Override
	public void handle(HttpExchange httpExchange) throws IOException {

		// Habilitar accesos CORS (intercambio de recursos de origne cruzado) para
		// peticiones POST, PUT y DELETE
		httpExchange.getResponseHeaders().add("Access-Control-Allow-Origin", "*");
		httpExchange.getResponseHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
		httpExchange.getResponseHeaders().add("Access-Control-Allow-Headers", "Content-Type,Authorization");
		if (httpExchange.getRequestMethod().equalsIgnoreCase("OPTIONS")) { // Caso PUT y DELETE se pide antes
																			// confirmacion desde cliente
			httpExchange.sendResponseHeaders(204, -1); // Codigo Ok, no devuelve contenido, preparado para POST, PUT o
														// DELETE
			return;
		}

		System.out.print("Peticion recibida: Tipo ");
		String requestParamValue = null;
		if ("GET".equalsIgnoreCase(httpExchange.getRequestMethod())) {
			System.out.println("GET");
			requestParamValue = handleGetRequest(httpExchange);
			try {
				handleGetResponse(httpExchange, requestParamValue);
			} catch (ClassNotFoundException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (IOException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			} catch (SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else if ("POST".equalsIgnoreCase(httpExchange.getRequestMethod())) {
			System.out.println("POST");
			requestParamValue = handlePostRequest(httpExchange);
			try {
				handlePostResponse(httpExchange, requestParamValue);
			} catch (ClassNotFoundException | IOException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else if ("PUT".equalsIgnoreCase(httpExchange.getRequestMethod())) {
			System.out.println("PUT");
			requestParamValue = handlePutRequest(httpExchange);
			try {
				handlePutResponse(httpExchange, requestParamValue);
			} catch (ClassNotFoundException | IOException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else if ("DELETE".equals(httpExchange.getRequestMethod())) {
			System.out.println("DELETE");
			requestParamValue = handleDeleteRequest(httpExchange);
			try {
				handleDeleteResponse(httpExchange, requestParamValue);
			} catch (ClassNotFoundException | IOException | SQLException e) {
				// TODO Auto-generated catch block
				e.printStackTrace();
			}
		} else {
			System.out.println("DESCONOCIDA");
		}

	}

	// INICIO BLOQUE REQUEST

	private String handleGetRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo GET: " + httpExchange.getRequestURI().toString());
		return httpExchange.getRequestURI().toString().split("\\?")[1];
	}

	private String handlePostRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo POST: " + httpExchange.getRequestBody().toString());
		InputStream is = httpExchange.getRequestBody();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		StringBuilder sb = new StringBuilder();
		String line;
		try {
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	private String handlePutRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo PUT: " + httpExchange.getRequestBody().toString());
		InputStream is = httpExchange.getRequestBody();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		StringBuilder sb = new StringBuilder();
		String line;
		try {
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	private String handleDeleteRequest(HttpExchange httpExchange) {
		System.out.println("Recibida URI tipo DELETE: " + httpExchange.getRequestBody().toString());
		InputStream is = httpExchange.getRequestBody();
		InputStreamReader isr = new InputStreamReader(is);
		BufferedReader br = new BufferedReader(isr);
		StringBuilder sb = new StringBuilder();
		String line;
		try {
			while ((line = br.readLine()) != null) {
				sb.append(line);
			}
			br.close();
		} catch (IOException e) {
			e.printStackTrace();
		}
		return sb.toString();
	}

	// FIN BLOQUE REQUEST

	// INICIO BLOQUE RESPONSE

	private void handleGetResponse(HttpExchange httpExchange, String requestParamValue)
			throws IOException, ClassNotFoundException, SQLException {

		System.out.println("El servidor pasa a procesar la peticion GET: " + requestParamValue);

		OutputStream outputStream = httpExchange.getResponseBody();
		String htmlResponse = getOperacion(requestParamValue);
		httpExchange.sendResponseHeaders(200, htmlResponse.length());
		outputStream.write(htmlResponse.getBytes());
		outputStream.flush();
		outputStream.close();
		System.out.println("Devuelve respuesta HTML: " + htmlResponse);
	}

	private void handlePostResponse(HttpExchange httpExchange, String requestParamValue)
			throws IOException, ClassNotFoundException, SQLException {

		System.out.println("El servidor pasa a procesar el body de la peticion POST: " + requestParamValue);

		OutputStream outputStream = httpExchange.getResponseBody();
		String htmlResponse = postOperacion(requestParamValue);
		System.out.println("Devuelve respuesta HTML: " + htmlResponse);
		httpExchange.sendResponseHeaders(200, htmlResponse.length());
		outputStream.write(htmlResponse.getBytes());
		outputStream.flush();
		outputStream.close();
	}

	private void handlePutResponse(HttpExchange httpExchange, String requestParamValue)
			throws IOException, ClassNotFoundException, SQLException {

		System.out.println("El servidor pasa a procesar el body de la peticion PUT: " + requestParamValue);
		

		OutputStream outputStream = httpExchange.getResponseBody();
		String htmlResponse = actualizarCuenta(requestParamValue);
		System.out.println("Devuelve respuesta HTML: " + htmlResponse);
		httpExchange.sendResponseHeaders(200, htmlResponse.length());
		outputStream.write(htmlResponse.getBytes());
		outputStream.flush();
		outputStream.close();
	}

	private void handleDeleteResponse(HttpExchange httpExchange, String requestParamValue)
			throws IOException, ClassNotFoundException, SQLException {

		System.out.println("El servidor pasa a procesar el body de la peticion DELETE: " + requestParamValue);

		

	}
	// FIN BLOQUE RESPONSE

	// INICIO METODOS GET
	// INICIO CASOS DE GET
	public static String getOperacion(String param) throws ClassNotFoundException, SQLException {

		String responseGet = "";
		switch (param) {

		case "dependents":
			responseGet = getInfoDependent();
			break;
		case "attributes":
			responseGet = getAttribute();
			break;
		case "assistants":
			responseGet = getAssistant();
			break;
		}
		return responseGet;
	}

	// FIN CASOS DE GET
	// GET INFO DEPENDENT SLIDER
	public static String getInfoDependent() throws ClassNotFoundException, SQLException {

		String responseDependent = "";
		int object = 1; // indice del objeto que lee el select
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("SELECT * FROM Dependents");
		while (rs.next()) {
			if (object == 1) { // si es el primer objeto iniciará con [
				responseDependent += "[{ \"IdDependents\":" + rs.getInt(1) + ", \"Name\":" + rs.getString(2)
						+ ", \"LastName\":" + rs.getString(3) + ", \"Adress\":" + rs.getString(4) + ", \"Gender\":"
						+ rs.getString(5) + ", \"Age\":" + rs.getInt(6) + ", \"FamilyContact\":" + rs.getInt(7)
						+ ", \"Diseases\":" + rs.getString(8) + ", \"Allergies\":" + rs.getString(9)
						+ ", \"Assistant\":" + rs.getInt(10) + ", \"DependencyLevel\":" + rs.getString(11) + "}";

			} else { // si ya ha introducido el primero, no deberá crear el array con [, debera
						// seguir añadiendo objetos
				responseDependent += "{ \"IdDependents\":" + rs.getInt(1) + ", \"Name\":" + rs.getString(2)
						+ ", \"LastName\":" + rs.getString(3) + ", \"Adress\":" + rs.getString(4) + ", \"Gender\":"
						+ rs.getString(5) + ", \"Age\":" + rs.getInt(6) + ", \"FamilyContact\":" + rs.getInt(7)
						+ ", \"Diseases\":" + rs.getString(8) + ", \"Allergies\":" + rs.getString(9)
						+ ", \"Assistant\":" + rs.getInt(10) + ", \"DependencyLevel\":" + rs.getString(11) + "}";
			}
			object++;
		}

		responseDependent += "]"; // finalmente cuando no tiene mas objetos que leer, cierra el array
		rs.close();
		stmt.close();
		con.close();
		return responseDependent;
	}

	// INICIO GET DE ATRIBUTOS
	// TIPOS DE ATRIBUTO PASTILLAS = 3 -- TAREAS= 2 -- RECORDATORIOS = 1
	public static String getAttribute() throws ClassNotFoundException, SQLException {
		String responseAttribute = "";
		int object = 1;
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("SELECT * FROM attributes ");
		while (rs.next()) {
			if (object == 1) {
				responseAttribute += "[{ \"IdAttribute\":" + rs.getInt(1) + ", \"Type\":" + rs.getInt(2) + ", \"Name\":"
						+ rs.getString(3) + ", \"Description\":" + rs.getString(4) + ", \"Dependents\":" + rs.getInt(5)
						+ ", \"Date\":" + rs.getDate(6) + "}";

			} else {
				responseAttribute += "{ \"IdAttribute\":" + rs.getInt(1) + ", \"Type\":" + rs.getInt(2) + ", \"Name\":"
						+ rs.getString(3) + ", \"Description\":" + rs.getString(4) + ", \"Dependents\":" + rs.getInt(5)
						+ ", \"Date\":" + rs.getDate(6) + "}";
			}
			object++;
		}

		responseAttribute += "]";
		rs.close();
		stmt.close();
		con.close();
		return responseAttribute;
	}
	// FIN GET DE ATRIBUTOS

	// INICIO GET DATOS ASISTENTE
	public static String getAssistant() throws ClassNotFoundException, SQLException {
		String responseAssistant = "";
		int object = 1;
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("SELECT * FROM assistant ");
		while (rs.next()) {
			if (object == 1) {
				responseAssistant += "[{ \"IdAssistant\":" + rs.getInt(1) + ", \"User\":" + rs.getString(2)
						+ ", \"Password\":" + rs.getString(3) + ", \"Gender\":" + rs.getString(4) + ", \"Email\":"
						+ rs.getString(5) + "}";

			} else {
				responseAssistant += "{ \"IdAssistant\":" + rs.getInt(1) + ", \"User\":" + rs.getString(2)
						+ ", \"Password\":" + rs.getString(3) + ", \"Gender\":" + rs.getString(4) + ", \"Email\":"
						+ rs.getString(5) + "}";
			}
			object++;
		}

		responseAssistant += "]";
		rs.close();
		stmt.close();
		con.close();
		return responseAssistant;
	}
	// FIN GET DE ASISTENTE
	// FIN METODOS GET

	// INICIO METODOS POST
	// INICIO OPERACION DE POST
	public static String postOperacion(String param) throws ClassNotFoundException, SQLException {

		JSONObject obj = new JSONObject(param);
		String op = obj.getString("op");
		System.out.println("Tipo de operación: "+op);

		String responsePost = "";
		switch (op) {

		case "login":
			responsePost = login(param);
			break;
		case "login2":
			responsePost = login2(param);
			break;
		case "register":
			responsePost = register(param);
			break;
			//* MEJORA A FUTURO
		/*case "newAttribute":
			responsePost = newAttribute(param);
			break;*/
		case "Add":
			responsePost = newDependent(param);
			break;
		case "delete":
			responsePost = deleteDependent(param);
			break;
		}
		System.out.println(responsePost);
		return responsePost;
	}
	// FIN OPERACION DE POST

	// POST LOGIN DEVUELVE ID ASSISTANT + LOGIN TRUE
	public static String login(String request) throws ClassNotFoundException, SQLException {

		//System.out.println(request); 
		
		int idAssistant = 0;
		JSONObject obj = new JSONObject(request);
		String user = obj.getString("user"); 
		String pwd = obj.getString("pass");
		System.out.println("Los datos recibidos son: Usuario -> "+user + " || Contraseña -> " + pwd);
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery(
				"SELECT IdAssistant,User,Gender, Email FROM assistant WHERE User = '" + user + "' and Password='" + pwd + "'");

		JSONObject objResult = new JSONObject();

		while (rs.next()) {
			idAssistant = rs.getInt(1); // recoger la id del asistente que coincida
			//System.out.println(idAssistant);
			if (idAssistant != 0) {
				objResult.put("correct", "OK");
				objResult.put("IdAssistant", rs.getInt(1));
				objResult.put("User", rs.getString(2));
				objResult.put("Gender", rs.getString(3));
				objResult.put("Email", rs.getString(4));
				
			} else {
				objResult.put("correct", "false");
			}
		}
		//System.out.println(objResult.toString());

		return objResult.toString();
	}

	// INICIO METODO LOGIN
	public static String login2(String request) throws ClassNotFoundException, SQLException {
		//System.out.println(request); 

		JSONObject obj = new JSONObject(request);
		int idAssistant = obj.getInt("id");
		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		Statement stmt = con.createStatement();
		ResultSet rs = stmt.executeQuery("SELECT IdDependents, Name, LastName, Age, Diseases, Allergies, FamilyContact, Address, "
										+ "DependencyLevel, Gender FROM dependents WHERE Assistant = "+ idAssistant);
		JSONArray array = new JSONArray();
		JSONObject objReturn = new JSONObject();

		while (rs.next()) {
			JSONObject objResult = new JSONObject();

			objResult.put("IdDependents", rs.getInt(1));
			objResult.put("Name", rs.getString(2));
			objResult.put("LastName", rs.getString(3));
			objResult.put("Age", rs.getInt(4));
			objResult.put("Diseases", rs.getString(5));
			objResult.put("Allergies", rs.getString(6));
			objResult.put("FamilyContact", rs.getString(7));
			objResult.put("Address", rs.getString(8));
			objResult.put("DependencyLevel", rs.getString(9));
			objResult.put("Gender", rs.getString(10));
	
			array.put(objResult);
		}

		objReturn.put("array", array);
		//System.out.println("Los datos recogidos para devolver son -> "+objReturn.toString());
		return objReturn.toString();
	}
	// FIN METODO LOGIN

	// INICIO METODO CREAR CUENTA
	public static String register(String request) throws ClassNotFoundException, SQLException {

		System.out.println(request);

		JSONObject obj = new JSONObject(request);
		String user = obj.getString("user");
		String pwd = obj.getString("pass");
		String email = obj.getString("email");
		String gender = obj.getString("gender");

		System.out.println(user + " " + pwd + " " + email + " " + gender);

		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		PreparedStatement psInsertar = con
				.prepareStatement("INSERT INTO assistant (User,Password,Gender,Email )VALUES (?,?,?,?)");
		psInsertar.setString(1, user);
		psInsertar.setString(2, pwd);
		psInsertar.setString(3, gender);
		psInsertar.setString(4, email);
		psInsertar.executeUpdate();
		return "{ \"correct\" : \"OK\" }";
	}
	// FIN METODO CREAR CUENTA

	// INICIO METODO CREAR CUENTA
	public static String newDependent(String request) throws ClassNotFoundException, SQLException {
		//System.out.println(request);

		JSONObject obj = new JSONObject(request);

		String name = obj.getString("name");
		String lastName = obj.getString("lastName");
		String address = obj.getString("adress");
		String gender = obj.getString("gender");
		int age = obj.getInt("age");
		int familyContact = obj.getInt("tel");
		String diseases = obj.getString("diseases");
		String allergies = obj.getString("alergies");
		int assistant = obj.getInt("idAssistant");
		String dependencyLevel = obj.getString("dependency");

		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		PreparedStatement psInsertar = con.prepareStatement(
				"INSERT INTO dependents (Name,LastName,Address,Gender,Age,FamilyContact,Diseases,Allergies,"
				+ "Assistant,DependencyLevel )VALUES (?,?,?,?,?,?,?,?,?,?)");

		psInsertar.setString(1, name);
		psInsertar.setString(2, lastName);
		psInsertar.setString(3, address);
		psInsertar.setString(4, gender);
		psInsertar.setInt(5, age);
		psInsertar.setInt(6, familyContact);
		psInsertar.setString(7, diseases);
		psInsertar.setString(8, allergies);
		psInsertar.setInt(9, assistant);
		psInsertar.setString(10, dependencyLevel);
		psInsertar.executeUpdate();
		return "{ \"correct\" : \"OK\" }";
	}
	// FIN METODO CREAR CUENTA

	
	// FIN METODOS POST

	// INICIO METODOS PUT
	// INICIO ACTUALIZAR CUENTA
	public String actualizarCuenta(String request) throws ClassNotFoundException, SQLException {
		//System.out.println(request);

		JSONObject obj = new JSONObject(request);
		int id = obj.getInt("id");
		String user = obj.getString("user");
		String mail = obj.getString("mail");

		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
		PreparedStatement psActualizar = con.prepareStatement(
				"UPDATE assistant SET User = '" + user + "', Email = '" + mail + "' WHERE IdAssistant = " + id);
		int resultadoActualizar = psActualizar.executeUpdate();

		return String.valueOf(resultadoActualizar) ;
	}
	// FIN ACTUALIZAR CUENTA
	// FIN METODOS PUT
	
	// INICIO METODOS DELETE
	
	
	

	// INICIO DELETE DEPENDENT
	public static String deleteDependent(String request) throws ClassNotFoundException, SQLException {

		System.out.println(request);

		JSONObject obj = new JSONObject(request);
		int id = obj.getInt("id");

		Class.forName("com.mysql.cj.jdbc.Driver");
		Connection con = DriverManager.getConnection("jdbc:mysql://localhost/dailysense", "root", "");
		PreparedStatement psBorrar = con.prepareStatement("DELETE FROM dependents WHERE IdDependents = " + id);
		int resultadoDelete = psBorrar.executeUpdate();
		System.out.println(resultadoDelete);
		
		return "{ \"correct\" : \"OK\" }";
	}

	// FIN DELETE DEPENDENT
	// FIN METODOS DELETE
	//-------------------------------------------------------------------------------------------------------------
		//MEJORAS PROYECTO FINAL MANEL
		
		
			// INICIO METODO CREAR ATRIBUTO
			public static String newAttribute(String request) throws ClassNotFoundException, SQLException {
				System.out.println(request);

				JSONObject obj = new JSONObject(request);
				int type = obj.getInt("type");
				String name = obj.getString("name");
				String description = obj.getString("description");
				int dependent = obj.getInt("dependents");

				System.out.println(type + " " + name + " " + description + " " + dependent);

				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
				PreparedStatement psInsertar = con
						.prepareStatement("INSERT INTO attributes (Type,Name,Description,Dependents )VALUES (?,?,?,?)");
				psInsertar.setInt(1, type);
				psInsertar.setString(2, name);
				psInsertar.setString(3, description);
				psInsertar.setInt(4, dependent);
				psInsertar.executeUpdate();
				return "{ \"correct\" : \"OK\" }";
			}

			// FIN METODO CREAR ATRIBUTO
		
		// INICIO DELETE ATTRIBUTE
		public static String deleteAttribute(String request) throws ClassNotFoundException, SQLException {

			System.out.println(request);

			JSONObject obj = new JSONObject(request);
			int id = obj.getInt("id");

			Class.forName("com.mysql.cj.jdbc.Driver");
			Connection con = DriverManager.getConnection("jdbc:mysql://localhost/dailysense", "root", "");
			PreparedStatement psBorrar = con.prepareStatement("DELETE FROM attributes WHERE IdAttribute = " + id);
			int resultadoDelete = psBorrar.executeUpdate();
			System.out.println(resultadoDelete);
			
			return "{ \"correct\" : \"OK\" }";
		}
		// FIN DELETE ATTRIBUTE
		
		// INICIO METODO getTasks
			public static String getTasks(String request) throws ClassNotFoundException, SQLException {
				//System.out.println(request); 

				JSONObject obj = new JSONObject(request);
				int idDependent = obj.getInt("id");
				int tipo=2;
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery("SELECT IdAttribute, Name, Description "
												+ " FROM attributes WHERE Dependents = "+ idDependent+" AND Type = " +tipo);
				JSONArray array = new JSONArray();
				JSONObject objReturn = new JSONObject();

				while (rs.next()) {
					JSONObject objResult = new JSONObject();

					objResult.put("IdAttribute", rs.getInt(1));
					objResult.put("Name", rs.getString(2));
					objResult.put("Description", rs.getString(3));
			
					array.put(objResult);
				}

				objReturn.put("array", array);
				//System.out.println("Los datos recogidos para devolver son -> "+objReturn.toString());
				return objReturn.toString();
			}
			// FIN METODO getTasks
			
			// INICIO METODO getReminders
			public static String getReminders(String request) throws ClassNotFoundException, SQLException {
				//System.out.println(request); 

				JSONObject obj = new JSONObject(request);
				int idDependent = obj.getInt("id");
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery("SELECT IdAttribute, Type, Name, Description, Date "
												+ " FROM attributes WHERE Dependents = "+ idDependent +"&& Type = " +1);
				JSONArray array = new JSONArray();
				JSONObject objReturn = new JSONObject();

				while (rs.next()) {
					JSONObject objResult = new JSONObject();

					objResult.put("IdAttribute", rs.getInt(1));
					objResult.put("Type", rs.getString(2));
					objResult.put("Name", rs.getString(3));
					objResult.put("Description", rs.getString(4));
					objResult.put("Date", rs.getString(5));
			
					array.put(objResult);
				}

				objReturn.put("array", array);
				//System.out.println("Los datos recogidos para devolver son -> "+objReturn.toString());
				return objReturn.toString();
			}
			// FIN METODO getReminders
			
			// INICIO METODO getPills
			public static String getPills(String request) throws ClassNotFoundException, SQLException {
				//System.out.println(request); 

				JSONObject obj = new JSONObject(request);
				int idDependent = obj.getInt("id");
				Class.forName("com.mysql.cj.jdbc.Driver");
				Connection con = DriverManager.getConnection("jdbc:mysql://10.0.0.4/dailysense", "dailysense", "-a123456");
				Statement stmt = con.createStatement();
				ResultSet rs = stmt.executeQuery("SELECT IdAttribute, Type, Name, Description, Date "
													+ " FROM attributes WHERE Dependents = "+ idDependent +"&& Type = " +3);
				JSONArray array = new JSONArray();
				JSONObject objReturn = new JSONObject();

				while (rs.next()) {
					JSONObject objResult = new JSONObject();

					objResult.put("IdAttribute", rs.getInt(1));
					objResult.put("Type", rs.getString(2));
					objResult.put("Name", rs.getString(3));
					objResult.put("Description", rs.getString(4));
					objResult.put("Date", rs.getString(5));
			
					array.put(objResult);
				}

				objReturn.put("array", array);
				//System.out.println("Los datos recogidos para devolver son -> "+objReturn.toString());
				return objReturn.toString();
			}
			// FIN METODO getPills
}

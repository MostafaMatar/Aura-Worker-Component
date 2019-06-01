<!DOCTYPE html>
<html>
	<body>
		<h2>Aura Worker Components</h2>
		<p>Aura Worker Components is a collection of aura service components each performing a specific function which you can use from the controller of your own aura components by invoking them from the Javascript controller.</p>
		<p>The list of components in this repository include the following.</p>
		<h3>UserNotifier Component</h3>
		<p>A UI component that can show a notification via a toast message or a Javascript alert if the force:showToast event isn't supported to users.</p>
		<p>In order to use the component, first include it in your component using the following code snippet<br />
			<pre>&lt;c:UserNotifier id="notifier" /&gt;</pre>
		</p>
		<p>Next, you should call the method defined in the component whenever you need to specify a message using the following code snippet<br />
			<pre>component.find("notifier").notifyUser({title: "SUCCESS", message: "Action was successfull"});</pre>
		</p>
	</body>
</html>
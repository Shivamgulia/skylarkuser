export async function getUserDetails({ token, studentId, apiBasePath }) {
  try {
    const studentRes = await fetch(
      `${apiBasePath}/api/v1/students/${studentId}`
    );

    if (!studentRes.ok) {
      return { success: false };
    }
    const student = await studentRes.json();

    return {
      success: true,
      data: student,
    };
  } catch (e) {
    return { success: false };
  }
}

// data: email , password

export async function login({ apiBasePath, data }) {
  try {
    console.log({ email: data.email, password: data.password });

    const loginRes = await fetch(`${apiBasePath}/auth/login/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email: data.email, password: data.password }),
    });

    if (!loginRes.ok) {
      console.log("failed");

      return { success: false };
    }

    const user = await loginRes.json();
    console.log(user);

    return { success: true, data: user };
  } catch (e) {
    return { success: false };
  }
}

export async function signup({ apiBasePath, data }) {
  try {
    const signupRes = await fetch(`${apiBasePath}/auth/signup/student`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
        coachId: data.coachid,
      },
    });

    if (!signupRes.ok) {
      return { success: false };
    }
  } catch (e) {
    return { success: false };
  }
}

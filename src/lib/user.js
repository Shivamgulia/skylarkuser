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
    const loginRes = await fetch(`${apiBasePath}/auth/login`, {
      method: "POST",
      ContentType: "application/json",
      body: { email: data.email, password: data.password },
    });

    if (!loginRes.ok) {
      return { success: false };
    }

    const user = await loginRes.json();

    return { success: true, data: user };
  } catch (e) {
    return { success: false };
  }
}

export async function signup({ apiBasePath, data }) {
  try {
    const signupRes = await fetch(`${apiBasePath}/auth/login`, {
      method: "POST",
      ContentType: "application/json",
      body: {
        email: data.email,
        password: data.password,
        name: data.name,
        role: "Student",
      },
    });

    if (!signupRes.ok) {
      return { success: false };
    }
  } catch (e) {
    return { success: false };
  }
}

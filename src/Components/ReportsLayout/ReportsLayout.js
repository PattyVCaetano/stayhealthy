import React, { useEffect } from 'react';
import './ReportsLayout.css';
import { useNavigate } from 'react-router-dom';

const ReportsLayout = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const authtoken = sessionStorage.getItem("auth-token");
        if (!authtoken) {
            navigate("/login");
        }
    }, [navigate]);

    // Sample report data 
    const reportData = [
        {
            serialNumber: 1,
            doctorName: 'Dr. Ramesh',
            doctorSpeciality: 'Cardiology',
            reportUrl: '../patient_report_1.pdf' // Example URL for report 1
        },
        {
            serialNumber: 2,
            doctorName: 'Dr. Harini',
            doctorSpeciality: 'Dermatology',
            reportUrl: '../patient_report_2.pdf' // Example URL for report 2
        },
        // Add more report data objects as needed 
    ];

    return (
        <div className="reports-container">
            <h1>Reports</h1>
            <table className="report-table">
                <thead>
                    <tr>
                        <th>S.No.</th>
                        <th>Doctor Name</th>
                        <th>Doctor Specialty</th>
                        <th>View Report</th>
                        <th>Download Report</th>
                    </tr>
                </thead>

                <tbody>
                    {reportData.map((report, index) => (
                        <tr key={report.serialNumber}>
                            <td>{report.serialNumber}</td>
                            <td>{report.doctorName}</td>
                            <td>{report.doctorSpeciality}</td>
                            <td>
                                <a href={report.reportUrl} target='_blank' className="report-link" rel="noreferrer">
                                    View Report
                                </a>
                            </td>
                            <td>
                                <a href={report.reportUrl} target='_blank' download className="report-link" rel="noreferrer">
                                    Download Report
                                </a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default ReportsLayout;

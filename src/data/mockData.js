export const teamMembers = [
  {
    id: 1,
    name: 'Alexei Volkov',
    email: 'alexei.volkov@company.com',
    joinDate: '2022-03-15',
    position: 'Senior Agent',
    metrics: {
      utilization: 92,
      videoAHT: 8.5,
      commentsAHT: 5.2,
      pktScore: 94,
      wfa: {
        login_logout: 3,
        exposure_time: 480,
        case_work: 1920,
        general_breaks: 30,
        translation_support: 45,
        vertical_training: 60,
        default: 0,
        system_updates: 20
      }
    }
  },
  {
    id: 2,
    name: 'Natasha Petrov',
    email: 'natasha.petrov@company.com',
    joinDate: '2021-07-22',
    position: 'Agent',
    metrics: {
      utilization: 88,
      videoAHT: 9.2,
      commentsAHT: 5.8,
      pktScore: 91,
      wfa: {
        login_logout: 3,
        exposure_time: 450,
        case_work: 1850,
        general_breaks: 45,
        translation_support: 50,
        vertical_training: 40,
        default: 15,
        system_updates: 15
      }
    }
  },
  {
    id: 3,
    name: 'Boris Sokolov',
    email: 'boris.sokolov@company.com',
    joinDate: '2023-01-10',
    position: 'Junior Agent',
    metrics: {
      utilization: 85,
      videoAHT: 10.1,
      commentsAHT: 6.5,
      pktScore: 87,
      wfa: {
        login_logout: 2,
        exposure_time: 400,
        case_work: 1780,
        general_breaks: 60,
        translation_support: 70,
        vertical_training: 90,
        default: 30,
        system_updates: 25
      }
    }
  },
  {
    id: 4,
    name: 'Svetlana Ivanova',
    email: 'svetlana.ivanova@company.com',
    joinDate: '2020-11-05',
    position: 'Senior Agent',
    metrics: {
      utilization: 94,
      videoAHT: 8.1,
      commentsAHT: 4.9,
      pktScore: 96,
      wfa: {
        login_logout: 3,
        exposure_time: 500,
        case_work: 1950,
        general_breaks: 25,
        translation_support: 30,
        vertical_training: 35,
        default: 5,
        system_updates: 18
      }
    }
  },
  {
    id: 5,
    name: 'Igor Kuznetsov',
    email: 'igor.kuznetsov@company.com',
    joinDate: '2022-05-18',
    position: 'Agent',
    metrics: {
      utilization: 90,
      videoAHT: 8.8,
      commentsAHT: 5.5,
      pktScore: 92,
      wfa: {
        login_logout: 3,
        exposure_time: 480,
        case_work: 1900,
        general_breaks: 35,
        translation_support: 40,
        vertical_training: 50,
        default: 10,
        system_updates: 20
      }
    }
  }
];

export const calculateTeamAverages = () => {
  const count = teamMembers.length;
  return {
    utilization: (teamMembers.reduce((sum, m) => sum + m.metrics.utilization, 0) / count).toFixed(1),
    videoAHT: (teamMembers.reduce((sum, m) => sum + m.metrics.videoAHT, 0) / count).toFixed(2),
    commentsAHT: (teamMembers.reduce((sum, m) => sum + m.metrics.commentsAHT, 0) / count).toFixed(2),
    pktScore: (teamMembers.reduce((sum, m) => sum + m.metrics.pktScore, 0) / count).toFixed(1),
    wfa: calculateTeamWFA()
  };
};

export const calculateTeamWFA = () => {
  const count = teamMembers.length;
  return {
    login_logout: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.login_logout, 0) / count).toFixed(2),
    exposure_time: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.exposure_time, 0) / count).toFixed(0),
    case_work: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.case_work, 0) / count).toFixed(0),
    general_breaks: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.general_breaks, 0) / count).toFixed(1),
    translation_support: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.translation_support, 0) / count).toFixed(1),
    vertical_training: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.vertical_training, 0) / count).toFixed(1),
    default: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.default, 0) / count).toFixed(1),
    system_updates: (teamMembers.reduce((sum, m) => sum + m.metrics.wfa.system_updates, 0) / count).toFixed(1)
  };
};

const langButtons = document.querySelectorAll(".lang-button");
const i18nNodes = document.querySelectorAll("[data-i18n]");
const i18nHtmlNodes = document.querySelectorAll("[data-i18n-html]");
const pageMetaDescription = document.querySelector('meta[name="description"]');

const translations = {
  ja: {
    page_title: "PHAM THI MY DUYEN",
    page_description:
      "PHAM THI MY DUYENのポートフォリオ。BrSE・QA・プロジェクト推進、日越クロスボーダー業務の実績。",
    nav_profile: "プロフィール",
    nav_strengths: "強み",
    nav_career: "経歴",
    nav_projects: "実績",
    nav_activities: "活動",
    nav_contact: "連絡先",
    hero_eyebrow: "BRSE / QA / JAPAN–VIETNAM PROJECTS",
    hero_title: '日越をつなぎ、<span>現場で前へ進める</span>',
    hero_text:
      "品質管理・プロジェクト推進・顧客折衝を通じて、日本企業とベトナム開発チームをつなぐ仕事を担当しています。ビジネスマッチングからITプロジェクトまで、現場重視で成果に結び付けてきました。",
    hero_cta_projects: "実績を見る",
    hero_cta_contact: "連絡先",
    hero_badge_location: "Tokyo, Japan",
    metric_1: "IT経験",
    metric_2: "日本顧客対応",
    metric_3: "言語（日・英・越）",
    metric_4: "TOEIC 760",
    summary_label: "Career Summary",
    stat_1: "年のIT経験",
    stat_2: "年の日本顧客対応",
    stat_3: "QA / Dir / BrSE",
    skill_1: "JLPT N2（2019）",
    skill_2: "TOEIC 760（2025）",
    skill_3: "ベトナム語（ネイティブ）",
    profile_eyebrow: "Profile",
    profile_title: "現場を重視し、関係者をつなぐ推進力",
    profile_text_1:
      "私の強みは、品質管理・進行管理・顧客折衝をひとつの流れとして捉え、日越チーム間の橋渡しを行えることです。",
    profile_text_2:
      "Bravesoft VietnamではQAリーダー、Bravesoft JapanではBrSE・プロジェクトディレクターとして、要件整理から見積・進捗管理、法務・経理連携まで一貫して携わってきました。MTG、集英社、ベネッセ、マルハン等の案件で、ReFa GINZA、Locipo、ヤンジャン!、AI StLike等のプロジェクトを担当しています。",
    strengths_eyebrow: "Strengths",
    strengths_title: "業務で強みを発揮できる領域",
    strength_1_title: "Cross-border Bridge",
    strength_1_text:
      "日本側クライアントとベトナム開発チームの間で、要件伝達・仕様展開・進捗共有を行い、認識齟齬を減らしながらプロジェクトを前進させます。",
    strength_2_title: "Quality Management",
    strength_2_text:
      "テスト計画策定、不具合検証、再現・修正指示、メンバー進捗管理まで一貫して対応し、安定した品質を維持します。",
    strength_3_title: "Project Coordination",
    strength_3_text:
      "スケジュール、関係者、優先順位を整理し、顧客・開発・法務・経理など多様なステークホルダーと協働して成果に結び付けます。",
    career_eyebrow: "Career",
    career_title: "職務経歴",
    career_1_date: "2024.09 – 現在",
    career_1_role: "QA / Director / BrSE",
    career_1_text:
      "日本側クライアントとベトナム開発チーム間の要件伝達・仕様展開、見積作成、進捗・タスク管理。ヤンジャン!、AI StLike、マルハンアプリ等の品質管理も担当。",
    career_2_date: "2024.05 – 2024.08",
    career_2_role: "QA / Director",
    career_2_text:
      "開発・検証の進捗管理、顧客要件ヒアリング、法務・経理連携。ReFa GINZA旗艦店向けカスタム受付システムの開発全体管理を担当。",
    career_3_date: "2018.08 – 2024.03",
    career_3_role: "QA / QA Leader",
    career_3_text:
      "Web/アプリの品質保証。QAリーダーとして日本向け自社プロダクトの品質管理を担当。",
    career_4_date: "2017.08 – 2018.07",
    career_4_role: "Event Staff",
    career_4_text:
      "F&B分野のビジネスマッチングイベント運営、来場者対応、飲食店開業支援に向けた物件探索・顧客紹介。",
    projects_eyebrow: "Selected Projects",
    projects_title: "代表プロジェクト",
    projects_note:
      '各プロダクトの概要は<a href="https://bravesoft.co.jp/works/" target="_blank" rel="noopener noreferrer">bravesoft公式実績</a>を参考に記載しています。',
    project_ref: "Reference",
    project_1_tag: "Retail / Custom Service",
    project_1_role: "開発全体管理",
    project_1_client: "クライアント：株式会社MTG様",
    project_1_text:
      "2025年11月銀座にオープンしたReFa旗艦店向けカスタム受付システム。刻印・刺繍サービスのユーザーサイト／管理サイトについて、開発全体管理を担当しました。",
    project_1_point_1: "開発・検証の進捗管理",
    project_1_point_2: "顧客要件ヒアリング・仕様協議",
    project_2_tag: "Media / Manga",
    project_2_role: "品質管理",
    project_2_client: "クライアント：株式会社集英社様",
    project_2_text:
      "集英社公式・ジャンプ系青年マンガ総合サイトのリニューアル案件。漫画・グラビアコンテンツの読書体験を支えるWebサイトの品質管理を担当しました。",
    project_2_point_1: "Web/UIのテスト計画・実行",
    project_2_point_2: "不具合検証・再現",
    project_2_point_3: "リリース品質の維持",
    project_3_tag: "Media / Streaming",
    project_3_role: "品質管理",
    project_3_client: "クライアント：東海テレビ・中京テレビ・CBCテレビ・テレビ愛知 等",
    project_3_text:
      "名古屋の民放5局が運営する動画配信プラットフォーム。保守運用・追加開発フェーズにおいて、テスト計画と品質管理を担当しました。",
    project_3_point_1: "テスト計画・進捗管理",
    project_3_point_2: "不具合検証・開発連携",
    project_3_point_3: "継続運用の品質維持",
    project_4_tag: "EdTech / Video",
    project_4_role: "品質管理",
    project_4_client: "クライアント：株式会社ベネッセコーポレーション様",
    project_4_text:
      "幼児向け映像配信アプリ。スマートフォン版とAndroid TV / Fire TV向けテレビ版のQAを担当し、視聴体験の安定性と継続運用品質を支えました。",
    project_4_point_1: "スマホ・TV版の機能検証",
    project_4_point_2: "多端末での動作確認",
    project_4_point_3: "リリース前後の品質管理",
    project_5_tag: "EdTech / AI",
    project_5_role: "品質管理",
    project_5_client: "クライアント：株式会社ベネッセコーポレーション様",
    project_5_text:
      "進研ゼミ高校講座会員向けの次世代型学習アプリ。アダプティブ授業とAI問題演習を搭載したサービスの品質管理を担当しました。",
    project_5_point_1: "アプリ機能のQA",
    project_5_point_2: "不具合検証・再現",
    project_5_point_3: "日越チームとの品質連携",
    project_6_tag: "Consumer App",
    project_6_role: "品質管理",
    project_6_client: "クライアント：株式会社マルハン様",
    project_6_text:
      "全国319店舗以上の台データ閲覧や店舗情報検索ができる公式アプリ。長期運用プロジェクトにおいて、機能追加・改善フェーズの品質管理を担当しました。",
    project_6_point_1: "iOS/AndroidのQA",
    project_6_point_2: "継続リリースの品質確認",
    project_6_point_3: "不具合管理・進捗報告",
    activities_eyebrow: "Activities",
    activities_title: "仕事以外の活動",
    activities_intro:
      "語学・コミュニケーションを活かし、社内外で継続的に取り組んできた活動です。",
    activity_1_year: "2023",
    activity_1_tag: "Language",
    activity_1_title: "日本語スピーチ大会（2023）",
    activity_1_text:
      "2023年、青山国際教育学院の第35回スピーチ大会に参加。15名の参加者が集う中、日本語での発表・コミュニケーション力を活かしました。",
    activity_2_year: "2024",
    activity_2_tag: "Internal",
    activity_2_title: "プレゼンテーション（2024）",
    activity_2_text: "会社内でビジョンを共有するプレゼンテーションを実施しました。",
    activity_3_year: "2025",
    activity_3_tag: "Volunteer",
    activity_3_title: "英語クラブボランティア（2025）",
    activity_3_text:
      "日本の子ども向け英語クラブでボランティア活動に参加し、言語交流を通じて相互理解を深めました。",
    photo_placeholder: "写真準備中",
    contact_eyebrow: "Contact",
    contact_title: "お問い合わせ",
    contact_text:
      "プロジェクト推進、品質管理、日越クロスボーダー業務に関するご連絡は、以下よりお気軽にどうぞ。",
    contact_facebook: "Facebook",
    contact_location: "東京都江戸川区在住",
    contact_interest: "関心：企業支援・海外展開",
    footer_text: "© PHAM THI MY DUYEN",
    footer_back_to_top: "トップへ戻る",
  },
  en: {
    page_title: "PHAM THI MY DUYEN",
    page_description:
      "Portfolio of PHAM THI MY DUYEN — QA, project coordination, and cross-border work across Japan–Vietnam teams.",
    nav_profile: "Profile",
    nav_strengths: "Strengths",
    nav_career: "Career",
    nav_projects: "Projects",
    nav_activities: "Activities",
    nav_contact: "Contact",
    hero_eyebrow: "BRSE / QA / JAPAN–VIETNAM PROJECTS",
    hero_title: 'Connecting Japan and Vietnam,<span>moving projects forward on the ground</span>',
    hero_text:
      "I am responsible for connecting Japanese companies and Vietnamese development teams through quality management, project coordination, and client communication. From business matching to IT projects, I have focused on field-based execution and delivering results.",
    hero_cta_projects: "View Projects",
    hero_cta_contact: "Contact",
    hero_badge_location: "Tokyo, Japan",
    metric_1: "years in IT",
    metric_2: "years with Japanese clients",
    metric_3: "languages (JP / EN / VN)",
    metric_4: "JLPT N2",
    summary_label: "Career Summary",
    stat_1: "years in IT",
    stat_2: "years with Japanese clients",
    stat_3: "QA / Dir / BrSE",
    skill_1: "JLPT N2 (2019)",
    skill_2: "TOEIC 760 (2025)",
    skill_3: "Vietnamese (native)",
    profile_eyebrow: "Profile",
    profile_title: "Field-focused coordination across stakeholders",
    profile_text_1:
      "My strength is treating quality control, progress management, and client communication as one flow, while bridging Japan–Vietnam teams effectively.",
    profile_text_2:
      "At Bravesoft Vietnam, I worked as a QA Leader. At Bravesoft Japan, I served as BrSE and Project Director, handling requirements, estimates, progress management, and coordination with legal and accounting teams. I have contributed to projects such as ReFa GINZA, Locipo, Yanjan!, and AI StLike for clients including MTG, Shueisha, Benesse, and Maruhan.",
    strengths_eyebrow: "Strengths",
    strengths_title: "Areas where I create value",
    strength_1_title: "Cross-border Bridge",
    strength_1_text:
      "I translate requirements, clarify specifications, and share progress between Japanese clients and Vietnamese teams to reduce misalignment and keep projects moving.",
    strength_2_title: "Quality Management",
    strength_2_text:
      "I handle test planning, defect verification, reproduction, fix coordination, and team progress management to maintain stable release quality.",
    strength_3_title: "Project Coordination",
    strength_3_text:
      "I organize schedules, stakeholders, and priorities, working with clients, developers, legal, and finance teams to deliver outcomes.",
    career_eyebrow: "Career",
    career_title: "Work Experience",
    career_1_date: "Sep 2024 – Present",
    career_1_role: "QA / Director / BrSE",
    career_1_text:
      "Requirement transfer and specification rollout between Japanese clients and Vietnamese teams. Estimation, progress and task management. Quality management for Yanjan!, AI StLike, Maruhan App, and other projects.",
    career_2_date: "May – Aug 2024",
    career_2_role: "QA / Director",
    career_2_text:
      "Managed development and QA progress, gathered client requirements, and coordinated with legal and accounting. Led overall development management for the ReFa GINZA flagship custom reception system.",
    career_3_date: "Aug 2018 – Mar 2024",
    career_3_role: "QA / QA Leader",
    career_3_text:
      "Web and app quality assurance. As QA Leader, managed quality for in-house products for Japanese clients.",
    career_4_date: "Aug 2017 – Jul 2018",
    career_4_role: "Event Staff",
    career_4_text:
      "Operated F&B business matching events, supported visitors, and assisted restaurant opening plans through property search and client introductions.",
    projects_eyebrow: "Selected Projects",
    projects_title: "Representative Projects",
    projects_note:
      'Product overviews are based on public information from <a href="https://bravesoft.co.jp/works/" target="_blank" rel="noopener noreferrer">bravesoft official works</a>.',
    project_ref: "Reference",
    project_1_tag: "Retail / Custom Service",
    project_1_role: "Overall Development Management",
    project_1_client: "Client: MTG Co., Ltd.",
    project_1_text:
      "Custom reception system for the ReFa GINZA flagship store opened in Ginza, November 2025. Led overall development management for the user site and admin site supporting engraving and embroidery services.",
    project_1_point_1: "Development and QA progress management",
    project_1_point_2: "Client requirement gathering and specification alignment",
    project_2_tag: "Media / Manga",
    project_2_role: "Quality Management",
    project_2_client: "Client: Shueisha Inc.",
    project_2_text:
      "Renewal of Shueisha's official Young Jump manga platform. Managed quality for the web experience supporting manga and gravure content.",
    project_2_point_1: "Web/UI test planning and execution",
    project_2_point_2: "Defect verification and reproduction",
    project_2_point_3: "Release quality maintenance",
    project_3_tag: "Media / Streaming",
    project_3_role: "Quality Management",
    project_3_client: "Clients: Tokai TV, Chukyo TV, CBC TV, TV Aichi, etc.",
    project_3_text:
      "Video streaming platform operated by five Nagoya broadcasters. Managed test planning and quality during maintenance and additional development phases.",
    project_3_point_1: "Test planning and progress control",
    project_3_point_2: "Defect verification and developer coordination",
    project_3_point_3: "Quality maintenance for continuous operation",
    project_4_tag: "EdTech / Video",
    project_4_role: "Quality Management",
    project_4_client: "Client: Benesse Corporation",
    project_4_text:
      "Video streaming app for preschool children. Managed QA for smartphone and Android TV / Fire TV versions to support stable viewing and long-term operation.",
    project_4_point_1: "Feature testing for smartphone and TV versions",
    project_4_point_2: "Multi-device verification",
    project_4_point_3: "Pre- and post-release quality management",
    project_5_tag: "EdTech / AI",
    project_5_role: "Quality Management",
    project_5_client: "Client: Benesse Corporation",
    project_5_text:
      "Next-generation learning app for Shinken Zemi high school members, featuring adaptive lessons and AI exercises. Managed app quality assurance.",
    project_5_point_1: "App feature QA",
    project_5_point_2: "Defect verification and reproduction",
    project_5_point_3: "Quality coordination across Japan–Vietnam teams",
    project_6_tag: "Consumer App",
    project_6_role: "Quality Management",
    project_6_client: "Client: Maruhan Co., Ltd.",
    project_6_text:
      "Official app for browsing machine data and store information across 319+ locations nationwide. Managed quality during long-term feature updates and improvements.",
    project_6_point_1: "iOS/Android QA",
    project_6_point_2: "Quality checks for continuous releases",
    project_6_point_3: "Defect tracking and progress reporting",
    activities_eyebrow: "Activities",
    activities_title: "Activities Beyond Work",
    activities_intro:
      "Ongoing activities inside and outside work that apply my language skills and communication strengths.",
    activity_1_year: "2023",
    activity_1_tag: "Language",
    activity_1_title: "Japanese Speech Contest (2023)",
    activity_1_text:
      "In 2023, participated in the 35th Speech Contest at Aoyama International Education Institute. Among 15 participants, applied Japanese presentation and communication skills.",
    activity_2_year: "2024",
    activity_2_tag: "Internal",
    activity_2_title: "Presentations (2024)",
    activity_2_text: "Making presentations within the company to share vision.",
    activity_3_year: "2025",
    activity_3_tag: "Volunteer",
    activity_3_title: "English Club Volunteer (2025)",
    activity_3_text:
      "Volunteered at an English club for Japanese children, promoting language exchange and mutual understanding.",
    photo_placeholder: "Photo coming soon",
    contact_eyebrow: "Contact",
    contact_title: "Get in touch",
    contact_text:
      "For inquiries about project coordination, quality management, or Japan–Vietnam cross-border work, please reach out below.",
    contact_facebook: "Facebook",
    contact_location: "Based in Edogawa, Tokyo",
    contact_interest: "Interest: Company support / overseas expansion",
    footer_text: "© PHAM THI MY DUYEN",
    footer_back_to_top: "Back to top",
  },
};

let currentLanguage = localStorage.getItem("portfolio-language") || "ja";

const applyLanguage = (lang) => {
  const dictionary = translations[lang] || translations.ja;

  currentLanguage = lang;
  document.documentElement.lang = lang;
  document.title = dictionary.page_title;

  if (pageMetaDescription) {
    pageMetaDescription.setAttribute("content", dictionary.page_description);
  }

  i18nNodes.forEach((node) => {
    const key = node.dataset.i18n;
    if (key && dictionary[key]) {
      node.textContent = dictionary[key];
    }
  });

  i18nHtmlNodes.forEach((node) => {
    const key = node.dataset.i18nHtml;
    if (key && dictionary[key]) {
      node.innerHTML = dictionary[key];
    }
  });

  langButtons.forEach((button) => {
    const isActive = button.dataset.lang === lang;
    button.classList.toggle("active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  localStorage.setItem("portfolio-language", lang);
};

const initActivityPhotos = () => {
  document.querySelectorAll("[data-activity-photo]").forEach((img) => {
    const showFallback = () => {
      img.classList.add("is-hidden");
    };

    const hideFallback = () => {
      img.classList.remove("is-hidden");
    };

    img.addEventListener("error", showFallback);
    img.addEventListener("load", () => {
      if (img.naturalWidth > 0) {
        hideFallback();
      }
    });

    if (img.complete) {
      if (img.naturalWidth > 0) {
        hideFallback();
      } else {
        showFallback();
      }
    }
  });
};

langButtons.forEach((button) => {
  button.addEventListener("click", () => {
    applyLanguage(button.dataset.lang || "ja");
  });
});

applyLanguage(currentLanguage);
initActivityPhotos();
